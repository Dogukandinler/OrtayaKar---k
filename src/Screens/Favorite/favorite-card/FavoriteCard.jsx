import React from "react";
import styles from "./FavoriteCard.module.css";

import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

const FavoriteCard = ({ favorites }) => {
  console.log("comemntler", favorites);

  const navigate = useNavigate();

  return (
    <section>
      {favorites.map((favorites, idx) => (
        <div
          key={idx}
          className={styles.testimonials}
          onClick={() => navigate("/restoran/" + favorites.id)}
        >
          <div className={styles.card}>
            <div className={styles.card_top}>
              <div className={styles.profile}>
                <div className={styles.profile_content}>
                  <div className={styles.profileImage}>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/8090/8090406.png"
                      alt="user"
                    />
                  </div>

                  <div className={styles.userInfo}>
                    <strong>{favorites.restoranAdi}</strong>
                    <p className="email">{favorites.restoranEmail}</p>
                  </div>
                </div>

                <div className="reviews">
                  {Array.from({ length: favorites.restoranPuanı }).map(
                    (_, index) => (
                      <i key={index} className="fas fa-star"></i>
                    )
                  )}
                </div>
              </div>
              <div className="reviews"></div>
            </div>

            <div className={styles.comment}>
              <p>{favorites.restoranKısaAcıklama}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FavoriteCard;
