import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { subCategoriesApi } from "../../api/subCategoriesApi";
import Navbar from "../../../Navbar/Navbar";
import SubCategoriesItems from "./SubCategoriesItems";
import GradiantCirculeLoading from "../../../../../../core/GradiantCirculeLoading";
import NotFound from "../../../../../../core/NotFound";
import Footer from "../../../Footer/Page/Footer";
import { Box } from "@mui/material";
function SubCategories() {
  const { id } = useParams();
  const cleanId = id.substring(1);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const subCategories = await subCategoriesApi(cleanId);
        setCategories(subCategories.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [cleanId]);
  return (
    <>
      <Navbar />
      {loading ? (
        <Box sx={{ height: "400px", position: "relative" }}>
          <GradiantCirculeLoading />
        </Box>
      ) : categories && categories.length > 0 ? (
        <SubCategoriesItems categories={categories} />
      ) : (
        <NotFound
          reason="No Results Found"
          explain="No Data, Please Try Again Later "
        />
      )}
      <Footer />
    </>
  );
}
export default SubCategories;
