import React, { useContext } from "react";
import Modal from "react-modal";

import { SettingsContext } from "../Contexts";

export default function Settings() {
  const [settings, setSettings] = useContext(SettingsContext);

  return (
    <Modal
      isOpen={settings.menuIsOpen}
      //   onAfterOpen={afterOpenModal}
      //   onRequestClose={closeModal}
      //   style={customStyles}
      //   contentLabel="Example Modal"
    >
      {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
      {/* <button onClick={closeModal}>close</button> */}
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
  );
}
