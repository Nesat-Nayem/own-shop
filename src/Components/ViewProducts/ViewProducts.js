import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Rate from "@mui/material/Rating";
import Box from "@mui/material/Box";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import "./ViewProducts.css";
import { Typography } from "@mui/material";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Review from "./Review";
import { allData, getAllServices } from "../../redux/dataSlice/dataSlice";
import Loading from "../Loader/loading";

const AntTabs = styled(Tabs)({
  borderBottom: "1.2px solid #000",
  "& .MuiTabs-indicator": {
    backgroundColor: "#000",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#000",
      fontWeight: theme.typography.fontWeightBold,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography sx={{ textAlign: "left" }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ViewProducts = () => {
  const [value, setValue] = useState(0);

  const [reviews, setReviews] = useState("");

  useEffect(() => {
    fetch("https://lit-sands-58263.herokuapp.com/api/postreview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  },[]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { productId } = useParams();

  const { allServices } = useSelector(allData);
  console.log("redux from viwe product", allServices.length);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, []);

  const productView = allServices.filter(
    (pro) => Number(pro.id) === Number(productId)
  );
  const prductreviewid = productView[0]?._id;

  const productreview = reviews?.data?.filter(
    (r) => r.productId === prductreviewid
  );

  const category = productView[0]?.category;

  const relatedProducts = allServices.filter(
    (pro) => pro.category.toLocaleLowerCase() === category.toLocaleLowerCase()
  );

  // image galary

  const galary = productView[0]?.gallery;

  const [selectedImg, setSelectedImg] = useState(galary);

  return (
    <>
      <Header></Header>

      {allServices.length === 0 ? (
        <Loading></Loading>
      ) : (
        <Container
          style={{ textAlign: "left", marginTop: "120px" }}
          className=""
        >
          <Row>
            <Col lg={8} md={8} sm={12}>
              {/* image galary  */}
              <div>
                <div className="cscontainer">
                  {selectedImg === undefined ? (
                    <img
                      src={galary[0]}
                      alt="selected"
                      className="selected imgstyle"
                    />
                  ) : (
                    <img
                      src={selectedImg}
                      alt="selected"
                      className="selected imgstyle"
                    />
                  )}
                  <h6 className="my-4" style={{ color: "purple" }}>
                    Image Gallary
                  </h6>
                  <div className="imgContainer">
                    {galary?.map((img, index) => (
                      <img
                        style={{
                          border: selectedImg === img ? "4px solid purple" : "",
                        }}
                        key={index}
                        className="imgstyle"
                        src={img}
                        alt="img"
                        onClick={() => setSelectedImg(img)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <Box sx={{ bgcolor: "#fff" }}>
                <AntTabs
                  value={value}
                  onChange={handleChange}
                  aria-label="ant example"
                >
                  <AntTab label="Long Description" />
                  <AntTab label="Short Description" />
                  <AntTab label="Reviews" />
                </AntTabs>
                <TabPanel value={value} index={0}>
                  {productView[0]?.longdesc}
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {productView[0]?.shrotdesc}
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, margin: "3px 0px 10px -25px" }}
                  >
                    Review of {productView[0]?.name}
                  </Typography>
                  <Typography variant="h2">4.67</Typography>
                  <Rate name="read-only" value="4.5" readOnly />
                  {productreview?.map((review) => (
                    <Review key={review?._id} review={review}></Review>
                  ))}
                </TabPanel>

                <Box sx={{ p: 3 }} />
              </Box>

              {/* dascripttion tabs  */}
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div>
                <h2
                  style={{
                    fontWeight: "bold",
                    fontSize: "36px",
                    fontFamily: "Poppins",
                    color: "#2c3038",
                  }}
                  className="my-2"
                >
                  {productView[0]?.name}
                </h2>
                <p className="my-4">
                  {" "}
                  <GpsFixedIcon /> {productView[0]?.location}
                </p>
                <Rating ratingValue={5} size={25} readonly={true} />
                <button
                  style={{
                    color: "#fff",
                    padding: "2px 10px",
                    textTransform: "uppercase",
                    background: "#d9c505",
                    borderRadius: "4px",
                    fontSize: "0.8125rem",
                    display: "block",
                    border: "none",
                    cursor: "text",
                  }}
                  className="my-2 "
                >
                  {productView[0]?.category}
                </button>
              </div>

              <div className="wideget mt-5">
                <p className="widamaunt">${productView[0]?.price}</p>

                <Link
                  to={`/products/checkout/${productView[0]?.id}`}
                  variant="dark"
                  className=" widgetbtn btn btn-primary"
                >
                  Book Services
                </Link>
              </div>

              <div className="cardcrearyfy mt-3">
                <div className="cardbodY">
                  <h5 className="cardtitLe">Service Provider</h5>
                  <div className="athorabout">
                    <div className="aboutproimage">
                      <div className="proviimagerap">
                        <a className="ancortt">
                          <img
                            className="img-fluid rounded-circle"
                            src={productView[0]?.providerPhoto}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="providerdetails">
                      <a className="authorname">
                        {productView[0]?.providername}
                      </a>
                      <p>
                        <i className="fas fa-circle online"></i>
                        Online
                      </p>
                      <p className="mmmuted">Member Since Sep 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <h3 className="ms-5">More Related Services</h3>

          <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5">
            {relatedProducts.slice(0, 2).map((p) => {
              return <Card key={p.id} product={p} />;
            })}
          </div>
        </Container>
      )}

      <Footer></Footer>
    </>
  );
};

export default ViewProducts;
