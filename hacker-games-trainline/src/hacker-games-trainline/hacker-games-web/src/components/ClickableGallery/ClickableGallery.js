import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    maxWidth: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  imageContainer: {
    height: 150,
    overflow: 'hidden',
    cursor: 'pointer'
  },
  image: {
    width: 160
  },
  wrong: {
    boxShadow: 'inset 0 0 10px #000000'
  }
});

const ClickableGallery = ({ images, onClick, isWrong, wrongPicture }) => {

  return (
    <div className={css(styles.container)}>
      {
        images.map((image, key) => (
          <div
            key={key}
            className={css(styles.imageContainer)}
            onClick={onClick.bind(this, image.isCorrectPicture, image.picturePath)}>
            {
              !(isWrong && wrongPicture === image.picturePath) && (
                <img className={css(styles.image)} src={image.picturePath}/>
              )
            }
          </div>
        ))
      }
    </div>
  );
};

export default ClickableGallery;
