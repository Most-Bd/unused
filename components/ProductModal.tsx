import { useRecoilState } from "recoil";
import { modalState } from "../utils/recoilAtom";

const ProductModal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setShowModal(false);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    color: "black",
    boxShadow: "none",
    p: 4,
  };

  // Todo : set up custom modal
  return (
    <div>
      <div>
        <p>Text in a modal</p>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
      </div>
    </div>
  );
};

export default ProductModal;
