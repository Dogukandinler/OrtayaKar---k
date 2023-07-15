import React from "react";
import styles from "./CommentCard.module.css";

import { Container, Row, Col } from "reactstrap";

const CommentsCard = ({ comments }) => {
  console.log("comemntler", comments);

  return (
    <section>
      {comments.map((comment, idx) => (
        <div key={idx} className={styles.testimonials}>
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
                    <strong>{comment.restoran.restoranAdi}</strong>
                    <p className="email">
                      {comment.restoran.restoranKısaAcıklama}
                    </p>
                  </div>
                </div>

                <div className="reviews">
                  {Array.from({ length: comment.puan }).map((_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <div className="reviews"></div>
            </div>

            <div className={styles.comment}>
              <p>{comment.yorumIcerigi}</p>
            </div>
            <div className={styles.commentd}>
              <p>{comment.createdDate}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CommentsCard;
