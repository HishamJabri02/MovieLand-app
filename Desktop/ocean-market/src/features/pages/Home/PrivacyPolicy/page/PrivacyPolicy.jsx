import Footer from "../../Footer/Page/Footer";
import Navbar from "../../Navbar/Navbar";
import PrivacyPolicyHeader from "./PrivacyPolicyHeader";
import PrivacyPolicyInformation from "./PrivacyPolicyInformation";
function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <PrivacyPolicyHeader />
      <PrivacyPolicyInformation />
      <Footer />
    </>
  );
}
export default PrivacyPolicy;
