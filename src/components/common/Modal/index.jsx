import { Button, Modal } from 'antd';
import "./index.scss";

const ModalComponent = ({ modalOpen, setModalOpen, setStatus, sendStatus, status }) => {

  return (
    <>

      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            onClick={sendStatus}
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
          >
            Post
          </Button>
        ]}
      >
        <input
          className='modal-input'
          placeholder='what do you want to talk about'
          onChange={(event) => setStatus(event.target.value)}
          value={status}
        ></input>

        {/* <button className='post-btn'>Post</button> */}
      </Modal>
    </>
  );
};

export default ModalComponent;