import Footer from "../../Footer/Page/Footer";
import Navbar from "../../Navbar/Navbar";
import DeveloperInformationDetails from "./DeveloperInformationDetails";
import DeveloperInformationHeader from "./DeveloperInformationHeader";
import DeveloperInformationIntro from "./DeveloperInformationIntro";
function DeveloperInformation() {
  return (
    <>
      <Navbar />
      <DeveloperInformationHeader />
      <DeveloperInformationIntro />
      <DeveloperInformationDetails />
      <Footer />
    </>
  );
}
export default DeveloperInformation;
