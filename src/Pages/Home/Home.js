import React from "react";

import Header from "../../Components/Header/Header";
import Landing from "../../Components/Landing/Landing";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import CourseBox from "../../Components/CourseBox/CourseBox";
import AboutUsBox from "../../Components/AboutUsBox/AboutUsBox";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import Footer from "../../Components/Footer/Footer";

import "./Home.css";
export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <div class="courses">
        <div class="container">
          <SectionHeader
            title="جدیدترین دوره ها"
            desc="سکوی پرتاپ شما به سمت موفقیت"
            allTitle="تمامی دوره ها"
          />

          <div class="courses-content">
            <div class="container">
              <div class="row">
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-us">
        <div class="container">
          <SectionHeader
            title="ما چه کمکی بهتون میکنیم؟"
            desc="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"
          />
        </div>
        <div class="container">
          <div class="row">
            <AboutUsBox />
            <AboutUsBox />
            <AboutUsBox />
            <AboutUsBox />
          </div>
        </div>
      </div>

      <div class="popular">
        <div class="container">
          <SectionHeader title="محبوب ترین دوره ها" desc="" />
        </div>
      </div>

      <section class="articles">
        <div class="container">
          <SectionHeader
            title="جدیدترین مقاله ها"
            desc="پیش به سوی ارتقای دانش"
            allTitle="تمامی مقاله ها"
          />

          <div class="articles__content">
            <div class="row">
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
