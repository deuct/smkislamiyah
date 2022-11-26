// React Needed
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// Styling
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import {
  IoTrashOutline,
  IoSunnySharp,
  IoArrowUndoOutline,
  IoAddOutline,
} from "react-icons/io5";

function NewPosting(props) {
  // Const Get params from url
  const [searchParams] = useSearchParams();
  const [paramsId, setParamsId] = useState(searchParams.get("jurusan_id"));
  const [roleAction, setRoleAction] = useState(searchParams.get("role"));

  // Const modal after post
  const [paramModals, setParamModals] = useState("");
  const [isModalClose, setIsModalClose] = useState(false);
  const [show, setShow] = useState(false);

  // Navigation
  const navigate = useNavigate();

  // Modal after post
  const handleCloseModal = () => setShow(false);
  const handleShowModal = (paramModal) => {
    setParamModals(paramModal);
    setShow(true);
  };
  const navigateAfterPost = () => {
    navigate("/dashboard/manage-program");
  };
  // End modal after post

  // Generate token for every API post
  const [name, setName] = useState(props.name);
  const [token, setToken] = useState(props.token);
  const [expired, setExpired] = useState(props.expired);

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      const expr = expired * 1000;
      const curDate = currentDate.getTime();
      const exprRes = currentDate.getTime() - expr;
      // if (expired * 1000 > currentDate.getTime()) {
      // if (config.status === 401) {
      const response = await axios.get("http://localhost:5000/token", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpired(decoded.exp);
      // }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // End generate token for evvery API post

  // Get id post
  const [idJurusan, setIdJurusan] = useState("");
  const [jurusanCode, setJurusanCode] = useState("");

  useEffect(() => {
    getIdJurusan();
  }, []);

  const getIdJurusan = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    };
    const response = await axiosJWT.get(
      "http://localhost:5000/jurusan/getid/getidjurusan",
      config
    );

    if (response) {
      const resId = response.data.jurusan_id;
      console.log(resId);
      if (resId !== undefined) {
        var idSplit = resId.match(/\d/g);
        idSplit = idSplit.join("");
        idSplit = parseInt(idSplit);
        idSplit += 1;
      } else {
        idSplit = 1;
      }
      setIdJurusan(idSplit);
    } else {
      console.log("failed getting postid");
    }
  };
  // End get id post

  // Get teacher for kaprog
  const [kaprog, setKaprog] = useState([]);

  useEffect(() => {
    getKaprog();
  }, []);

  const getKaprog = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/teachers`);
      if (response) {
        setKaprog(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // End Get teacher for kaprog

  // Option for edit program
  const [singleProgram, setSingleProgram] = useState([]);
  const [visi, setVisi] = useState([{ visi: "" }]);
  const [misi, setMisi] = useState([{ misi: "" }]);
  const [arrPrestasi, setArrPrestasi] = useState([]);
  const [arrDokumen, setArrDokumen] = useState([]);
  const [arrImage, setArrImage] = useState([]);

  useEffect(() => {
    initializeProgram();
  }, []);
  const initializeProgram = async () => {
    if (roleAction === "edit") {
      const singleProgram = await axios.get(
        `http://localhost:5000/jurusan/${paramsId}`
      );
      if (singleProgram) {
        setSingleProgram(singleProgram.data[0]);

        const jurusanVisi = singleProgram.data[0].jurusan_visi.split(",");
        jurusanVisi.map((vs) => {
          let visiObject = { visi: vs };
          if (visi[0].visi === "") {
            visi[0].visi = vs;
          } else if (visi[0].visi !== "") {
            setVisi((prev) => [...prev, visiObject]);
          }
        });

        const jurusanMisi = singleProgram.data[0].jurusan_misi.split(",");
        jurusanMisi.map((ms) => {
          let misiObject = { misi: ms };
          if (misi[0].misi === "") {
            misi[0].misi = ms;
          } else if (misi[0].misi !== "") {
            setMisi((prev) => [...prev, misiObject]);
          }
        });

        setJurusanCode(singleProgram.data[0].jurusan_id);

        const jurusanPrestasi = await axios.get(
          `http://localhost:5000/jurusan/prestasi/${paramsId}`
        );

        if (jurusanPrestasi) {
          jurusanPrestasi.data.map((prestasi) => {
            let imgprestasi = prestasi.jp_img_dir;
            imgprestasi = imgprestasi.replace(/\\/g, "/");

            setArrPrestasi((prev) => [
              ...prev,
              {
                prestasiId: prestasi.jp_id,
                prestasiName: prestasi.jp_name,
                prestasiPosisi: prestasi.jp_position,
                prestasiTahun: prestasi.jp_year,
                prestasiImgPreview: `http://localhost:5000/${imgprestasi}`,
              },
            ]);
          });
        }

        const jurusanDokumen = await axios.get(
          `http://localhost:5000/jurusan/dokumen/${paramsId}`
        );

        if (jurusanDokumen) {
          jurusanDokumen.data.map((dokumen) => {
            setArrDokumen((prev) => [
              ...prev,
              {
                jdId: dokumen.jd_id,
                dokumenName: dokumen.jd_name,
              },
            ]);
          });
        }

        const jurusanGallery = await axios.get(
          `http://localhost:5000/jurusan/gallery/${paramsId}`
        );

        if (jurusanGallery) {
          jurusanGallery.data.map((image) => {
            setArrImage((prev) => [
              ...prev,
              {
                imgId: image.jg_id,
                imgPreview: `http://localhost:5000/${image.jg_img_dir.replace(
                  /\\/g,
                  "/"
                )}`,
              },
            ]);
          });
        }
      }
    }
  };

  // Form Initialize
  var initialFormData = {
    jurusanId: "",
    jurusanName: "",
    jurusanKaprogId: "",
    jurusanAbout: "",
    jurusanVisi: "",
    jurusanMisi: "",
    jurusanGallery: "",
    jurusanDocument: "",
    jurusanSlug: "",
  };

  useEffect(() => {
    if (roleAction === "edit") {
      setFormData({
        ...formData,
        jurusanName: singleProgram.jurusan_name,
        jurusanKaprogId: singleProgram.jurusan_kaprog_id,
      });
    }
  }, [singleProgram]);

  const [formData, setFormData] = useState(initialFormData);
  const [jurusanDescription, setJurusanDescription] = useState("");

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // End Form

  // Submit Form
  const submitForm = async (e) => {
    e.preventDefault();

    let visiToInput = [];
    visi.map((vs) => {
      visiToInput.push(vs.visi);
    });

    let misiToInput = [];
    misi.map((ms) => {
      misiToInput.push(ms.misi);
    });

    let jurusanSlug =
      formData.jurusanName.replace(/\s/g, "-") +
      "-" +
      jurusanCode.replace("JRS", "");

    let formDataUpload = new FormData();
    if (roleAction === "add") {
      formDataUpload.append("jurusanId", "JRS" + idJurusan);
    } else if (roleAction === "edit") {
      formDataUpload.append("jurusanId", jurusanCode);
    }
    formDataUpload.append("jurusanName", formData.jurusanName);
    formDataUpload.append("jurusanKaprogId", formData.jurusanKaprogId);
    formDataUpload.append("jurusanAbout", jurusanDescription);
    formDataUpload.append("jurusanVisi", visiToInput);
    formDataUpload.append("jurusanMisi", misiToInput);
    formDataUpload.append("jurusanSlug", jurusanSlug);

    if (roleAction === "add") {
      var uploadForm = await axiosJWT.post(
        "http://localhost:5000/jurusan/newjurusan",
        {
          headers: {
            "Content-Type": "multipart/formdata",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
          body: {
            jurusanId: formDataUpload.get("jurusanId"),
            jurusanName: formDataUpload.get("jurusanName"),
            jurusanKaprogId: formDataUpload.get("jurusanKaprogId"),
            jurusanAbout: formDataUpload.get("jurusanAbout"),
            jurusanVisi: formDataUpload.get("jurusanVisi"),
            jurusanMisi: formDataUpload.get("jurusanMisi"),
            jurusanSlug: formDataUpload.get("jurusanSlug"),
          },
        }
      );
    } else if (roleAction === "edit") {
      var uploadForm = await axiosJWT.post(
        "http://localhost:5000/jurusan/update",
        {
          headers: {
            "Content-Type": "multipart/formdata",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
          body: {
            jurusanId: formDataUpload.get("jurusanId"),
            jurusanName: formDataUpload.get("jurusanName"),
            jurusanKaprogId: formDataUpload.get("jurusanKaprogId"),
            jurusanAbout: formDataUpload.get("jurusanAbout"),
            jurusanVisi: formDataUpload.get("jurusanVisi"),
            jurusanMisi: formDataUpload.get("jurusanMisi"),
            jurusanSlug: formDataUpload.get("jurusanSlug"),
          },
        }
      );
    }
    if (
      uploadForm &&
      (arrPrestasi !== null || arrImage !== null || arrDokumen !== null)
    ) {
      if (roleAction === "edit") {
        if (deletePrestasiEdit !== null) {
          deletePrestasiEdit.map(async (prestasiDel) => {
            let formPrestasiDel = new FormData();
            formPrestasiDel.append("prestasiId", prestasiDel.prestasiId);
            formPrestasiDel.append("prestasiFor", jurusanCode);
            formPrestasiDel.append(
              "prestasiImg",
              prestasiDel.prestasiImgPreview
            );

            const deleteProgramPrestasi = await axiosJWT.post(
              "http://localhost:5000/programprestasi/delete",
              {
                headers: {
                  "Content-Type": "multipart/formdata",
                  Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
                body: {
                  prestasiId: formPrestasiDel.get("prestasiId"),
                  prestasiFor: formPrestasiDel.get("prestasiFor"),
                  prestasiImg: formPrestasiDel.get("prestasiImg"),
                },
              }
            );
          });
        }

        if (dokumenDeleteEdit !== null) {
          dokumenDeleteEdit.map(async (dokumenDel) => {
            let formDokumenDel = new FormData();
            formDokumenDel.append("jdId", dokumenDel.jdId);
            formDokumenDel.append("dokumenFor", jurusanCode);
            const deleteProgramDokumen = await axiosJWT.post(
              "http://localhost:5000/programdokumen/delete",
              {
                headers: {
                  "Content-Type": "multipart/formdata",
                  Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
                body: {
                  jdId: formDokumenDel.get("jdId"),
                  dokumenFor: formDokumenDel.get("dokumenFor"),
                },
              }
            );
          });
        }

        if (imageDeleteEdit !== null) {
          imageDeleteEdit.map(async (imageDel) => {
            let formImageDel = new FormData();
            formImageDel.append("imgId", imageDel.imgId);
            formImageDel.append("imgFor", jurusanCode);
            formImageDel.append("imgDir", imageDel.imgPreview);
            const deleteProgramGallery = await axiosJWT.post(
              "http://localhost:5000/programgallery/delete",
              {
                headers: {
                  "Content-Type": "multipart/formdata",
                  Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
                body: {
                  imgId: formImageDel.get("imgId"),
                  imgFor: formImageDel.get("imgFor"),
                  imgDir: formImageDel.get("imgDir"),
                },
              }
            );
          });
        }
      }

      arrPrestasi.map(async (prestasi) => {
        if (!("prestasiId" in prestasi)) {
          let formPrestasi = new FormData();
          formPrestasi.append("prestasiName", prestasi.prestasiName);
          formPrestasi.append("prestasiPosisi", prestasi.prestasiPosisi);
          formPrestasi.append("prestasiTahun", prestasi.prestasiTahun);
          formPrestasi.append("prestasiImgData", prestasi.prestasiImgData);
          if (roleAction === "add") {
            formPrestasi.append("prestasiFor", "JRS" + idJurusan);
          } else if (roleAction === "edit") {
            formPrestasi.append("prestasiFor", jurusanCode);
          }

          const uploadProgramPrestasi = await axiosJWT.post(
            "http://localhost:5000/programprestasi/newprogramprestasi/",
            formPrestasi,
            {
              headers: {
                "Content-Type": "multipart/formdata",
                Authorization: `Bearer ${token}`,
              },
              withCredentials: true,
            }
          );
        }
      });

      arrDokumen.map(async (dokumen) => {
        if (!("jdId" in dokumen)) {
          let formDokumen = new FormData();
          formDokumen.append("dokumenName", dokumen.dokumenName);
          formDokumen.append("dokumenData", dokumen.dokumenData);
          if (roleAction === "add") {
            formDokumen.append("dokumenFor", "JRS" + idJurusan);
          } else if (roleAction === "edit") {
            formDokumen.append("dokumenFor", jurusanCode);
          }

          console.log(formDokumen);
          const uploadProgramDokumen = await axiosJWT.post(
            "http://localhost:5000/programdokumen/newprogramdokumen",
            formDokumen,
            {
              headers: {
                "Content-Type": "multipart/formdata",
                Authorization: `Bearer ${token}`,
              },
              withCredentials: true,
            }
          );
        }
      });

      arrImage.map(async (image) => {
        if (!("imgId" in image)) {
          let formImage = new FormData();
          console.log(image);
          formImage.append("imageData", image.imgData);
          if (roleAction === "add") {
            formImage.append("galleryFor", "JRS" + idJurusan);
          } else if (roleAction === "edit") {
            formImage.append("galleryFor", jurusanCode);
          }

          const uploadProgramImage = await axiosJWT.post(
            "http://localhost:5000/programgallery/newprogramgallery",
            formImage,
            {
              headers: {
                "Content-Type": "multipart/formdata",
                Authorization: `Bearer ${token}`,
              },
              withCredentials: true,
            }
          );
        }
      });
      handleShowModal("successpost");
      setIsModalClose(true);
    }
  };

  // console.log(deletePrestasi);
  // End Submit Form

  // Image
  const [choosenImage, setChoosenImage] = useState([]);
  const inpImageRef = useRef(null);
  const handleImageChange = (e) => {
    setChoosenImage(Array.prototype.slice.call(e.target.files));
  };

  const addImage = (e, files) => {
    files.map((file) => {
      const imageFile = {
        imgPreview: URL.createObjectURL(file),
        imgData: file,
      };
      setArrImage((prev) => [...prev, imageFile]);
    });
    inpImageRef.current.value = null;
  };
  // End image

  // Select Image Checked
  const [checkedImage, setCheckedImage] = useState([]);

  useEffect(() => {
    setCheckedImage(new Array(arrImage.length).fill(false));
  }, [arrImage]);

  const selectImage = (position) => {
    const updateCheckedImage = checkedImage.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedImage(updateCheckedImage);
  };

  // End checked image

  // Delete Img from state
  const [imageDeleteEdit, setImageDeleteEdit] = useState([]);

  const deleteImage = async () => {
    checkedImage.map((chk, index) => {
      if (chk === true) {
        const imageToDelete = arrImage[index];
        setArrImage((prev) =>
          prev.filter((arrImage) => {
            return arrImage !== imageToDelete;
          })
        );
        if (roleAction === "edit") {
          if ("imgId" in imageToDelete) {
            setImageDeleteEdit((prev) => [...prev, imageToDelete]);
          }
        }
      }
    });
  }; //lagidisini
  console.log(imageDeleteEdit);
  // End Delete Img

  // add remove item visi

  const [arrVisi, setArrVisi] = useState([]);

  const handleVisiChange = (e, index) => {
    let data = [...visi];
    data[index][e.target.name] = e.target.value;
    setVisi(data);
  };

  const addVisi = () => {
    let object = {
      visi: "",
    };
    setVisi([...visi, object]);
  };

  const removeVisi = (index) => {
    let data = [...visi];
    data.splice(index, 1);
    setVisi(data);
  };
  // End remove add visi

  // Handle visi on submit (buat nanti saat proses submit form)
  const submitVisi = () => {
    visi.map((vs) => {
      setArrVisi((curr) => [...curr, vs.visi]);
    });
  };
  // End handle visi on submit

  // add remove item misi
  const [arrMisi, setArrMisi] = useState([]);

  const handleMisiChange = (e, index) => {
    let data = [...misi];
    data[index][e.target.name] = e.target.value;
    setMisi(data);
  };

  const addMisi = () => {
    let object = {
      misi: "",
    };
    setMisi([...misi, object]);
  };

  const removeMisi = (index) => {
    let data = [...misi];
    data.splice(index, 1);
    setMisi(data);
  };
  // End remove add misi

  // Handle misi on submit (buat nanti saat proses submit form)
  const submitMisi = () => {
    misi.map((ms) => {
      setArrMisi((curr) => [...curr, ms.misi]);
    });
  };
  // End handle misi on submit

  // Prestasi
  var initialPrestasi = {
    prestasiName: "",
    prestasiPosisi: "",
    prestasiTahun: "",
    prestasiImgName: "",
    prestasiImgPreview: "",
    prestasiImgData: "",
  };

  const [prestasi, setPrestasi] = useState(initialPrestasi);

  const handleImgPrestasiChange = (e) => {
    setPrestasi({
      ...prestasi,
      prestasiImgName: e.target.files[0].name,
      prestasiImgPreview: URL.createObjectURL(e.target.files[0]),
      prestasiImgData: e.target.files[0],
    });
  };

  const inpImgPrestasiRef = useRef(null);

  const addPrestasi = (e) => {
    setPrestasi(initialPrestasi);
    setArrPrestasi((prev) => [...prev, prestasi]);
    inpImgPrestasiRef.current.value = null;
  };
  // End prestasi

  // Select Prestasi Checked
  const [checkedPrestasi, setCheckedPrestasi] = useState([]);

  useEffect(() => {
    setCheckedPrestasi(new Array(arrPrestasi.length).fill(false));
  }, [arrPrestasi]);

  const selectPrestasi = (position) => {
    const updateCheckedPrestasi = checkedPrestasi.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedPrestasi(updateCheckedPrestasi);
  };
  // End Select Prestasi Checked

  // Delete prestasi
  const [deletePrestasiEdit, setDeletePrestasiEdit] = useState([]);
  const deletePrestasi = () => {
    checkedPrestasi.map((chk, index) => {
      if (chk === true) {
        const prestasiToDelete = arrPrestasi[index];
        setArrPrestasi((prev) =>
          prev.filter((arrPrestasi) => {
            return arrPrestasi !== prestasiToDelete;
          })
        );
        if (roleAction === "edit") {
          if ("prestasiId" in prestasiToDelete) {
            setDeletePrestasiEdit((prev) => [...prev, prestasiToDelete]);
          }
        }
      }
    });
  };

  // Dokumen
  var initialDokumen = {
    dokumenName: "",
    dokumenPreview: "",
    dokumenData: "",
  };

  const [dokumen, setDokumen] = useState(initialDokumen);

  const [chosenDokumen, setChosenDokumen] = useState([]);

  const handleDokumenChange = (e) => {
    setChosenDokumen(Array.prototype.slice.call(e.target.files));
  };

  const inpDokumenRef = useRef(null);

  const addDokumen = (e, files) => {
    files.map((file) => {
      const dokumenFile = {
        dokumenName: file.name,
        dokumenPreview: URL.createObjectURL(file),
        dokumenData: file,
      };
      setArrDokumen((prev) => [...prev, dokumenFile]);
    });

    setDokumen(initialDokumen);
    inpDokumenRef.current.value = null;
  };
  // End dokumen

  // Select Dokumen Checked
  const [checkedDokumen, setCheckedDokumen] = useState([]);

  useEffect(() => {
    setCheckedDokumen(new Array(arrDokumen.length).fill(false));
  }, [arrDokumen]);

  const selectDokumen = (position) => {
    const updateCheckedDokumen = checkedDokumen.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedDokumen(updateCheckedDokumen);
  };
  // End Select Dokumen Checked

  // Delete dokumen
  const [dokumenDeleteEdit, setDokumenDeleteEdit] = useState([]);
  const deleteDokumen = () => {
    checkedDokumen.map((chk, index) => {
      if (chk === true) {
        const dokumenToDelete = arrDokumen[index];
        setArrDokumen((prev) =>
          prev.filter((arrDokumen) => {
            return arrDokumen !== dokumenToDelete;
          })
        );
        if (roleAction === "edit") {
          if ("jdId" in dokumenToDelete) {
            setDokumenDeleteEdit((prev) => [...prev, dokumenToDelete]);
          }
        }
      }
    });
  };
  // console.log(dokumenDeleteEdit);
  // End delete dokumen

  return (
    <>
      {/* Modal After Insert Posting */}
      <Modal
        backdrop="static"
        keyboard={false}
        show={show}
        onHide={handleCloseModal}
      >
        <Modal.Body className="text-center">
          {paramModals ? (
            <>
              <h3 style={{ fontSize: "1.2rem", padding: "15px" }}>
                Successfully added new programs. Please check your programs in
                listing menu. Have a nice day!
                <IoSunnySharp size={25} style={{ color: "#ffaa00" }} />
              </h3>
              <Button
                variant="danger"
                onClick={(handleCloseModal, navigateAfterPost)}
              >
                Close
              </Button>{" "}
            </>
          ) : (
            <>
              <h3 style={{ fontSize: "1.2rem", padding: "15px" }}>
                failed added programs. Please check your form.
              </h3>
              <Button variant="danger" onClick={handleCloseModal}>
                Close
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
      <div>
        <div id="title-new-item" className="d-flex justify-content-between">
          <Link to={"/dashboard/manage-program"}>
            <Button variant="secondary">
              <IoArrowUndoOutline xs={25} /> Back
            </Button>
          </Link>
          {roleAction === "add" ? (
            <div className="text-center mx-auto w-auto">
              <h1 className="fs-2" style={{ fontWeight: "600" }}>
                New Programs
              </h1>
              <p className="mx-auto" style={{ width: "100%", margin: 0 }}>
                Create a new programs to make public can see it.
              </p>
            </div>
          ) : (
            <div className="text-center mx-auto w-auto">
              <h1 className="my-3 fs-2 text-center mx-auto">Edit Programs</h1>
              <p className="mx-auto" style={{ width: "100%", margin: 0 }}>
                Create a new programs to make public can see it.
              </p>
            </div>
          )}
        </div>
        <hr style={{ border: "1px solid gray" }} />
        <Row className="mt-5">
          <Col xs={8}>
            <Form className="my-3 justify-content-center">
              <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left">
                    Programs Code
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  {roleAction === "add" ? (
                    <Form.Control
                      type="text"
                      readOnly="yes"
                      className="w-75"
                      name="jurusanId"
                      value={"JRS" + idJurusan}
                      onInput={handleFormChange}
                    />
                  ) : (
                    <Form.Control
                      type="text"
                      readOnly="yes"
                      className="w-75"
                      value={jurusanCode}
                    />
                  )}
                </Col>
              </Form.Group>

              <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left">
                    Nama Program
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  {roleAction === "add" ? (
                    <Form.Control
                      type="text"
                      placeholder="Name of program"
                      className="w-75"
                      name="jurusanName"
                      value={formData.jurusanName}
                      onInput={handleFormChange}
                    />
                  ) : (
                    <Form.Control
                      type="text"
                      placeholder="Name of program"
                      className="w-75"
                      name="jurusanName"
                      defaultValue={singleProgram.jurusan_name}
                      onInput={handleFormChange}
                    />
                  )}
                </Col>
              </Form.Group>
              <Form.Group className="mb-3 d-flex">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left ">
                    Kepala Program
                  </Form.Label>
                </Col>
                <Col xs={10}>
                  {roleAction === "add" ? (
                    <Form.Select
                      aria-label="Select Post Type"
                      className="w-75"
                      name="jurusanKaprogId"
                      onInput={handleFormChange}
                    >
                      <option value="choose one" disabled selected>
                        ---choose kaprog---
                      </option>
                      {kaprog.map((kaprog) => {
                        return (
                          <option value={kaprog.teacher_id}>
                            {kaprog.teacher_name}
                          </option>
                        );
                      })}
                    </Form.Select>
                  ) : (
                    <Form.Select
                      aria-label="Select Post Type"
                      className="w-75"
                      name="jurusanKaprogId"
                      onInput={handleFormChange}
                      value={formData.jurusanKaprogId}
                    >
                      {kaprog.map((kaprog) => {
                        return (
                          <option value={kaprog.teacher_id}>
                            {kaprog.teacher_name}
                          </option>
                        );
                      })}
                    </Form.Select>
                  )}
                </Col>
              </Form.Group>
              <Form.Group className="mb-3 d-flex">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left ">Visi</Form.Label>
                </Col>
                <Col xs={10}>
                  {visi.map((form, index) => {
                    return (
                      <Row>
                        <div key={index} className="d-flex mt-1">
                          <Form.Control
                            type="text"
                            placeholder="visi"
                            className="w-75"
                            onChange={(e) => handleVisiChange(e, index)}
                            value={form.visi}
                            name="visi"
                          />
                          {form.name}
                          <Button
                            variant="danger"
                            onClick={() => removeVisi(index)}
                            className="ms-2"
                          >
                            -
                          </Button>
                        </div>
                      </Row>
                    );
                  })}
                  <Button onClick={addVisi} className="btn-add-program mt-1">
                    + Add visi
                  </Button>
                </Col>
              </Form.Group>
              <Form.Group className="mb-3 d-flex">
                <Col xs={3}>
                  <Form.Label className="me-3 p-1 text-left ">Misi</Form.Label>
                </Col>
                <Col xs={10}>
                  {misi.map((form, index) => {
                    return (
                      <Row>
                        <div key={index} className="d-flex mt-1">
                          <Form.Control
                            type="text"
                            placeholder="misi"
                            className="w-75"
                            onChange={(e) => handleMisiChange(e, index)}
                            value={form.misi}
                            name="misi"
                          />
                          {form.name}
                          <Button
                            variant="danger"
                            onClick={() => removeMisi(index)}
                            className="ms-2"
                          >
                            -
                          </Button>
                        </div>
                      </Row>
                    );
                  })}
                  <Button onClick={addMisi} className="btn-add-program mt-1">
                    + Add misi
                  </Button>
                </Col>
              </Form.Group>
              <Row className="d-flex my-5">
                <Col xs={3}>
                  <h2 className="me-3 p-1 text-left mb-3">About program</h2>
                </Col>
                <Col xs={12}>
                  {roleAction === "add" ? (
                    <CKEditor
                      editor={ClassicEditor}
                      config={{
                        removePlugins: [
                          "EasyImage",
                          "ImageUpload",
                          "MediaEmbed",
                          "InsertTable",
                        ],
                        height: "500px",
                      }}
                      data="<p>Type description of this programs</p>"
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        // console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setJurusanDescription(data);
                        // setPostShortDesc(
                        //   viewToPlainText(
                        //     editor.editing.view.document.getRoot()
                        //   )
                        // );
                        // setPostDesc(data);
                        // console.log({ event, editor, data });
                      }}
                      onBlur={(event, editor) => {
                        // console.log("Blur.", editor);
                      }}
                      onFocus={(event, editor) => {
                        // console.log("Focus.", editor);
                      }}
                    />
                  ) : (
                    <CKEditor
                      editor={ClassicEditor}
                      config={{
                        removePlugins: [
                          "EasyImage",
                          "ImageUpload",
                          "MediaEmbed",
                          "InsertTable",
                        ],
                        height: "500px",
                      }}
                      // data={postDesc}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        // console.log("Editor is ready to use!", editor);
                      }}
                      data={singleProgram.jurusan_about}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setJurusanDescription(data);
                        // console.log(
                        //   viewToPlainText(editor.editing.view.document.getRoot())
                        // );
                        // setPostShortDesc(
                        //   viewToPlainText(
                        //     editor.editing.view.document.getRoot()
                        //   )
                        // );
                        // setPostDesc(data);
                        // console.log({ event, editor, data });
                      }}
                      onBlur={(event, editor) => {
                        // console.log("Blur.", editor);
                      }}
                      onFocus={(event, editor) => {
                        // console.log("Focus.", editor);
                      }}
                    />
                  )}
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h2 className="my-3 fs-4 fw-bold">Prestasi</h2>
                  <div className="dashboard-gray-box">
                    {arrPrestasi.map((prestasi, index) => {
                      return (
                        <>
                          <div
                            key={
                              roleAction === "add" ? index : prestasi.prestasiId
                            }
                            onClick={() => selectPrestasi(index)}
                          >
                            <div
                              className="dgbitem-prestasi-program"
                              style={{
                                backgroundColor: checkedPrestasi[index]
                                  ? "salmon"
                                  : "RGB(232, 232, 232)",
                              }}
                            >
                              <img
                                src={prestasi.prestasiImgPreview}
                                className="dgbitem-pp-img"
                              />
                              <div className="dgbitem-pp-desc">
                                <h3 className="dgbitem-pp-title">
                                  {prestasi.prestasiName}
                                </h3>
                                <h3 className="dgbitem-pp-year">
                                  {prestasi.prestasiTahun}
                                </h3>
                                <h3 className="dgbitem-pp-position">
                                  {prestasi.prestasiPosisi}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </Col>
                <Col xs={12} className="mt-3">
                  <Row>
                    <Form.Group
                      className="mb-3 d-flex"
                      controlId="formBasicEmail"
                    >
                      <Col xs={3}>
                        <Form.Label className="me-3 p-1 text-left">
                          Prestasi
                        </Form.Label>
                      </Col>
                      <Col xs={10}>
                        <Form.Control
                          type="text"
                          placeholder="Name of prestasi"
                          className="w-75"
                          onChange={(e) =>
                            setPrestasi({
                              ...prestasi,
                              prestasiName: e.target.value,
                            })
                          }
                          value={prestasi.prestasiName}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group
                      className="mb-3 d-flex"
                      controlId="formBasicEmail"
                    >
                      <Col xs={3}>
                        <Form.Label className="me-3 p-1 text-left">
                          Posisi
                        </Form.Label>
                      </Col>
                      <Col xs={10}>
                        <Form.Control
                          type="text"
                          placeholder="Posisi"
                          className="w-75"
                          onChange={(e) =>
                            setPrestasi({
                              ...prestasi,
                              prestasiPosisi: e.target.value,
                            })
                          }
                          value={prestasi.prestasiPosisi}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group
                      className="mb-3 d-flex"
                      controlId="formBasicEmail"
                    >
                      <Col xs={3}>
                        <Form.Label className="me-3 p-1 text-left">
                          Tahun
                        </Form.Label>
                      </Col>
                      <Col xs={10}>
                        <Form.Control
                          type="text"
                          placeholder="Tahun"
                          className="w-75"
                          onChange={(e) =>
                            setPrestasi({
                              ...prestasi,
                              prestasiTahun: e.target.value,
                            })
                          }
                          value={prestasi.prestasiTahun}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group
                      controlId="formFileMultiple"
                      className="mb-3 mt-2"
                    >
                      <Form.Control
                        type="file"
                        name="file"
                        ref={inpImgPrestasiRef}
                        onChange={handleImgPrestasiChange}
                      />
                    </Form.Group>
                  </Row>
                </Col>
                <Col xs={6} className="justify-content-end ms-auto text-end">
                  <Button
                    variant="primary"
                    className="fs-6 mb-2 mt-4 d-inline-block me-2"
                    onClick={addPrestasi}
                  >
                    <IoAddOutline /> Add prestasi
                  </Button>
                  <Button
                    variant="danger"
                    className="fs-6 mb-2 mt-4 d-inline-block"
                    onClick={deletePrestasi}
                  >
                    <IoTrashOutline /> Delete prestasi
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h2 className="my-3 fs-4 fw-bold">Document</h2>
                  <div className="dashboard-gray-box">
                    {arrDokumen.map((dokumen, index) => {
                      return (
                        <>
                          <div
                            key={roleAction === "add" ? index : dokumen.jdId}
                            id={index}
                            onClick={() => selectDokumen(index)}
                          >
                            <div
                              className="dgbitem-prestasi-program"
                              style={{
                                backgroundColor: checkedDokumen[index]
                                  ? "salmon"
                                  : "RGB(232, 232, 232)",
                              }}
                            >
                              <div className="dgbitem-pp-desc">
                                <h3 className="dgbitem-pp-title">
                                  {dokumen.dokumenName}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </Col>
                <Col xs={12} className="mt-3">
                  <Row>
                    <Form.Group
                      controlId="formFileMultiple"
                      className="mb-3 mt-2 d-flex"
                    >
                      <Col xs={3}>
                        <Form.Label className="me-3 p-1 text-left">
                          Upload Dokumen
                        </Form.Label>
                      </Col>
                      <Col xs={8}>
                        <Form.Control
                          type="file"
                          name="file"
                          multiple
                          accept="application/pdf, application/xls, application/ppt, application/docx, application/docs"
                          ref={inpDokumenRef}
                          onChange={handleDokumenChange}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                </Col>
                <Col xs={6} className="justify-content-end ms-auto text-end">
                  <Button
                    variant="primary"
                    className="fs-6 mb-2 mt-4 d-inline-block me-2"
                    onClick={(e) => addDokumen(e, chosenDokumen)}
                  >
                    <IoAddOutline /> Add dokumen
                  </Button>
                  <Button
                    variant="danger"
                    className="fs-6 mb-2 mt-4 d-inline-block"
                    onClick={deleteDokumen}
                  >
                    <IoTrashOutline /> Delete dokumen
                  </Button>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <h2 className="my-3">Program Photo Gallery</h2>
                  <div id="image-box">
                    <div className="imgbox-photos mb-4">
                      {arrImage.map((image, index) => {
                        return (
                          <>
                            <div
                              className="imgbox-detail"
                              key={roleAction === "add" ? index : image.imgId}
                              id={index}
                              style={{
                                backgroundColor: checkedImage[index]
                                  ? "salmon"
                                  : "RGB(184, 184, 184)",
                              }}
                            >
                              <img
                                src={image.imgPreview}
                                alt="img upload"
                                className="m-1"
                                value={index}
                                key={index}
                                onClick={() => selectImage(index)}
                              />
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <Col xs={3} className="justify-content-end ms-auto text-end">
                    <Button
                      variant="danger"
                      className="fs-8 mb-2 mt-4"
                      onClick={deleteImage}
                    >
                      <IoTrashOutline /> Delete image
                    </Button>
                  </Col>
                </Col>
              </Row>
              <Row className="my-5">
                <Col xs={12}>
                  <div id="upload-image">
                    <h1 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                      Upload New Image
                    </h1>
                    <Form.Group
                      controlId="formFileMultiple"
                      className="mb-3 mt-2"
                    >
                      <Form.Control
                        type="file"
                        name="file"
                        multiple
                        accept="application/jpg, application/jpeg, application/png"
                        ref={inpImageRef}
                        onChange={handleImageChange}
                      />
                      <Button
                        className="mt-2"
                        type="button"
                        onClick={(e) => addImage(e, choosenImage)}
                      >
                        Upload
                      </Button>
                    </Form.Group>
                  </div>
                </Col>
              </Row>
              <hr style={{ border: "1px solid gray" }} />
              <Col className="text-end" id="btn-submit-form">
                <Link to={"/dashboard/manage-program"}>
                  <Button
                    variant="danger"
                    type="button"
                    className="mt-3 me-2 btn-post-item"
                  >
                    Cancel
                  </Button>
                </Link>
                <Button
                  variant="success"
                  value="posted"
                  onClick={(e) => {
                    submitForm(e);
                  }}
                  type="button"
                  className="mt-3 me-2 btn-post-item"
                >
                  Post
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default NewPosting;
