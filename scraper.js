const axios = require('axios')
const cheerio = require('cheerio')

const scrap = async () => {

  const data = []
  const response = await axios.get('https://food.grab.com/sg/en/')
  const $ = cheerio.load(response.data)

  //console.log($)

  const listItem = $('document.querySelector("#page-content > div:nth-child(5) > div > div > div.wrapper___2mfzz.ant-layout > div > div.swiperBoundary___s8O_R > div > div > div.swiper-slide.slide___q2S4n.swiper-slide-active > a > div > div.ant-col-24.colInfo___3iLqj.ant-col-md-24.ant-col-lg-24 > div.basicInfoContainer___1DcNs > div.basicInfoRow___UZM8d.numbers___2xZGn > div:nth-child(1)")')

  console.log(listItem)
}

scrap()

// /html/body/div[1]/div[2]/div[3]/div[5]/div/div/div[3]/div/div[1]/div/div/div[1]/a/div/div[2]/div[1]/div[2]/div[1]