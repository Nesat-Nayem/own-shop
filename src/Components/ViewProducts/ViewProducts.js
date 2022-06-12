import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./ViewProducts.css";
import { Typography } from "@mui/material";
import Card from "../Card/Card";
import { addProduct, setProducts } from "../../redux/slice";

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
      role="tabpanel"
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
  const cart = useSelector((state) => state.products.cart);
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { productId } = useParams();

  useEffect(() => {
    // fetch("http://localhost:5000/products")
    fetch("http://localhost:7070/api/products/getProduct")
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data)));
  }, []);

  const productView = products.filter(
    (pro) => Number(pro.id) === Number(productId)
  );

  const category = productView[0]?.category;

  const relatedProducts = products.filter(
    (pro) => pro.category.toLocaleLowerCase() === category.toLocaleLowerCase()
  );

  // add to cart
  const addToCart = (product) => {
    const obj = { ...product };
    obj.quantity = 1;
    dispatch(addProduct(obj));
  };

  return (
    <>
      <Container style={{ textAlign: "left", marginTop: "120px" }} className="">
        <Row>
          <Col lg={8} md={8} sm={12}>
            <h2 className="my-2">{productView[0]?.name}</h2>
            <p className="my-2">{productView[0]?.location}</p>
            <Rating
              ratingValue={productView[0]?.review * 20}
              size={25}
              readonly={true}
            />
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
              className="my-2"
            >
              {productView[0]?.category}
            </button>
            <img
              src={productView[0]?.img}
              alt=""
              className="img-responsive w-100"
            />

            {/* dascripttion tabs  */}

            <Box sx={{ bgcolor: "#fff" }}>
              <AntTabs
                value={value}
                onChange={handleChange}
                aria-label="ant example"
              >
                <AntTab label="Overview" />
                <AntTab label="Services Offered" />
                <AntTab label="Reviews" />
              </AntTabs>
              <TabPanel value={value} index={0}>
                {productView[0]?.desc}
              </TabPanel>
              <TabPanel value={value} index={1}>
                NO DATA
              </TabPanel>
              <TabPanel value={value} index={2}>
                NO DATA
              </TabPanel>

              <Box sx={{ p: 3 }} />
            </Box>

            {/* dascripttion tabs  */}
          </Col>
          <Col lg={4} md={4} sm={12}>
            <div className="wideget">
              <p className="widamaunt">${productView[0]?.price}</p>
    
              <a href="/checkout"
                variant="dark"
                className=" widgetbtn btn btn-primary"
                // onClick={() => dispatch(addToCart(productView[0]))}
              >
                Book Services
              </a>
          
            
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
                          src="https://truelysell.com/uploads/profile_img/1631787916.jpg"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="providerdetails">
                    <a className="authorname">David Smith</a>
                    <p>
                    <i class="fas fa-circle online"></i>
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
          {relatedProducts.map((p) => {
            return <Card key={p.id} product={p} />;
          })}
        </div>
      </Container>
    </>
  );
};

export default ViewProducts;
