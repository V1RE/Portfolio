<template>
  <div class="infowrapper">
    <div class="infopicture"></div>
    <div class="infocontent">
      <h2>Hi! I'm Niels,</h2>
      <p>
        <span>a web developer creating experiences that stick with people.</span>
        <span class="cursor">|</span>
      </p>
    </div>
    <div class="links">
      <a href="https://instagram.com/nmentink/" target="_blank" rel="noopener" title="@nmentink">
        <img src="../assets/instagram.svg" alt="Instagram" />
      </a>
      <a href="mailto:niels@ment.ink" target="_blank" rel="noopener" title="niels@ment.ink">
        <img src="../assets/email.svg" alt="Email" />
      </a>
      <a href="https://wa.me/31627035882" target="_blank" rel="noopener" title="+31 6 27035882">
        <img src="../assets/whatsapp.svg" alt="Whatsapp" />
      </a>
      <!-- <a href="https://ment.ink" target="_blank" rel="noopener" title="ment.ink">
        <img src="../assets/website.svg" alt="Website" />
      </a>
      <a href="https://github.com/V1RE" target="_blank" rel="noopener" title="Github">
        <img src="../assets/github.svg" alt="Github" />
      </a>-->
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
    background-image: url("../assets/profilepicture.png");
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 999px;
    width: 144px;
    height: 144px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 15px;
  }

  .infocontent {
    h2 {
      font-weight: bold;
      font-size: 26px;
      margin: 0;
      margin-bottom: 5px;

      @media (max-width: 497px) and (min-width: 348px) {
        font-size: 4.931vw;
      }

      @media (max-width: 348px) {
        font-size: 17.159px;
      }
    }

    p {
      margin-top: 0;
      max-width: 280px;

      .cursor {
        animation: 1s blink step-end infinite;
      }
    }

    a {
      color: black;
      text-decoration: none;
      font-size: 15px;
      line-height: 25px;
      margin-bottom: 5px;
      display: block;

      @media (max-width: 360px) {
        font-size: 12px;
      }

      img {
        vertical-align: middle;
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

  .links {
    margin: 0 -15px -15px -15px;
    text-align: center;

    a {
      height: 48px;
      width: 48px;
      display: inline-block;

      img {
        height: 24px;
        width: 24px;
        margin: 12px;
      }
    }
  }
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}
</style>
