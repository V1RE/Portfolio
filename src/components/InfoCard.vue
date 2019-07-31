<template>
  <div class="infowrapper">
    <div class="infopicture"></div>
    <div class="infocontent">
      <h2>Niels Mentink</h2>
      <a href="https://instagram.com/nmentink/" target="_blank" rel="noopener">
        <img src="../assets/instagram.svg" alt="Instagram" />@nmentink
      </a>
      <a href="mailto:niels@ment.ink" target="_blank" rel="noopener">
        <img src="../assets/email.svg" alt="Email" />niels@ment.ink
      </a>
      <a href="https://wa.me/31627035882" target="_blank" rel="noopener">
        <img src="../assets/whatsapp.svg" alt="Whatsapp" />+31 6 27035882
      </a>
      <a href="https://ment.ink" target="_blank" rel="noopener">
        <img src="../assets/website.svg" alt="Website" />ment.ink
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard"
};
</script>

<style lang="scss" scoped>
.infowrapper {
  .infopicture {
    background-image: url(../assets/profilepicture.png);
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 999px;
    width: 144px;
    height: 144px;
    float: left;
    margin-right: 15px;

    @media (max-width: 960px) {
      float: none;
      margin-right: auto;
      margin-left: auto;
      margin-bottom: 15px;
    }
  }

  .infocontent {
    float: left;

    @media (max-width: 960px) {
      float: none;
    }

    h2 {
      font-weight: bold;
      font-size: 26px;
      margin: 0;
      margin-bottom: 15px;

      // @media (max-width: 360px) {
      //   font-size: 18px;
      //   text-align: center;
      // }
    }

    a {
      color: black;
      text-decoration: none;
      font-size: 15px;
      line-height: 20px;
      margin-bottom: 5px;
      display: block;

      @media (max-width: 360px) {
        font-size: 12px;
      }

      img {
        vertical-align: bottom;
        margin-right: 5px;
      }

      &:last-of-type {
        margin-bottom: 0;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
