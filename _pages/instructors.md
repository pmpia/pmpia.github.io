---
layout: about
title: 대표 강사 소개
permalink: /instructors/
nav: true
nav_order: 2
subtitle:
hide_site_title: true

profile:
  align: right
  image: swchung.jpeg
  image_circular: false # crops the image to make it circular

---
<div class="instructors-layout">
  <nav class="instructors-menu" aria-label="강사 소개 섹션">
    <a href="#instructor-overview">정승원, 피엠피아 대표</a>
    <a href="#instructor-education">학력</a>
    <a href="#instructor-career">경력</a>
    <a href="#instructor-awards">수상 내역</a>
    <a href="#instructor-teaching">강의 이력</a>
    <a href="#instructor-publications">Publications</a>
    <a href="#instructor-timeline">주요 강의 이력</a>
    <a href="#instructor-community">커뮤니티·SNS</a>
  </nav>
  <div class="instructors-content" markdown="1">
### 정승원, 피엠피아 대표 {#instructor-overview}
<br>
#### 학력 {#instructor-education}
- 연세대학교 기계설계학과 졸

#### 경력 {#instructor-career}
- (전) Project Manager, Proctor & Gamble (P&G)
- (전) Project Management Officer, 삼성SDS
- (현) 대표, ㈜피엠피아 – 프로젝트 관리 교육 및 컨설팅

#### 수상 내역 {#instructor-awards}
- Microsoft Project MVP, Microsoft, 2006년부터 13년 연속 수상
- PRINCE2 Approved Trainer, PRINCE2 공인 강사, Axelos, 2013-현재
- Peoplecert Ambassador, 프로젝트 관리 부문, Peoplecert, 2024

#### 강의 이력 {#instructor-teaching}
- 삼성 멀티캠퍼스, 프로젝트 관리 부문 강사 2002-2008
- 한국 생산성 본부, 프로젝트 관리 부문 강사 2002-현재
- 100여개 이상의 기업을 대상으로 20여년 이상 프로젝트 관리 전문 교육 운영

#### Publications {#instructor-publications}
- PM+P, 소동출판사, PMP 시험대비 수험서

#### 주요 강의 이력 {#instructor-timeline}
<div class="company-timeline">
  {% assign items = site.data["companies-timeline"] %}
  {% assign prev_year = "" %}

  {% for item in items %}
    {% assign year = item.year %}
    {% assign month = item.month %}

    {% assign show_year = false %}
    {% if year != prev_year %}
      {% assign show_year = true %}
      {% assign prev_year = year %}
    {% endif %}

    <div class="company-item">
      {% if show_year %}
        <div class="company-dot" aria-hidden="true"></div>
      {% endif %}

      <div class="company-row">
        <span class="company-year {% if show_year %}show-year{% endif %}">
          {% if show_year %}{{ year }}{% endif %}
        </span>

        <span class="company-month">{{ month }}</span>

        <span class="company-name">
          {% if item.company %}
            {% if item.company.size %}
              {{ item.company | join: ", " }}
            {% else %}
              {{ item.company }}
            {% endif %}
          {% endif %}
        </span>
      </div>
    </div>
  {% endfor %}
</div>

<br>
#### 커뮤니티·SNS {#instructor-community}
<p class="post-tags community-tags">
  <a href="https://cafe.naver.com/pmplaza" target="_blank" rel="noopener noreferrer">
    <i class="fa-solid fa-mug-hot fa-sm"></i> 프로젝트 관리 전문 네이버카페
  </a>
  &nbsp;·&nbsp;
  <a href="https://cafe.naver.com/prince2group" target="_blank" rel="noopener noreferrer">
    <i class="fa-solid fa-mug-hot fa-sm"></i> PRINCE2 전문 네이버카페
  </a>
  &nbsp;·&nbsp;
  <a href="https://www.facebook.com/pmpia" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-facebook fa-sm"></i> PMPIA Facebook
  </a>
  &nbsp;·&nbsp;
  <a href="https://www.instagram.com/pmpia/" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-instagram fa-sm"></i> PMPIA Instagram
  </a>
</p>
  </div>
</div>
