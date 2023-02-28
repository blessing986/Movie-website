import React from "react";
import styles from "./modal.module.css";
import { RiCloseLine, RiArrowRightSLine } from "react-icons/ri";


const modal = ({ setIsOpen }) => {

    return (

        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />

            <div className={styles.centered}>

                <div>

                    {/* <ul className="wrapper text-black text-lg"> */}

                        <ul className={styles.wrapper}>

                        <li className="mb-4">Home</li>
                        <li className="mb-4">My List</li>
                        <li className="mb-4">Available for Download</li>
                        <li className="mb-4">Action</li>
                        <li className="mb-4">Anime</li>
                        <li className="mb-4">Comedies</li>
                        <li className="mb-4">Crime</li>
                        <li className="mb-4">Documentaries</li>
                        <li className="mb-4">Dramas</li>
                        <li className="mb-4">Fantasy</li>
                        <li className="mb-4">Horror</li>
                        <li className="mb-4">Kids & Family</li>
                        <li className="mb-4">Music & Musical</li>
                        <li className="mb-4">Reality</li>
                        <li className="mb-4">Romance</li>
                        <li className="mb-4">Sci-Fi</li>
                        <li className="mb-4">Stand-Up</li>
                        <li className="mb-4">Thrillers</li>
                        <li className="mb-4">Audio Descrption</li>
                    </ul>

                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />

                    </button>

            </div>

        </div>

        </>

    );

};

export default modal;