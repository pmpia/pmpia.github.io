---
layout: page
title: 회사 소개
permalink: /about-us/
nav: true
nav_order: 4
---

<section class="about-hero">
  <div class="about-hero__overlay">
    <h1>About Us</h1>
    <p>(주) 피엠피아 PMPIA co., Ltd</p>
    <p>프로젝트 관리 교육 및 컨설팅 전문 기관</p>
  </div>
</section>

<section class="about-cards">
  <div class="about-card">
    <h2>Who Are We</h2>
    <p>
      피엠피아는 2010년 설립된 프로젝트 관리 교육/컨설팅 전문 기관으로 국내의
      사업관리(PM) 분야에서 공개교육, 기업위탁교육, 온라인 교육, 전문서적 출간 등
      다양한 사업을 진행해오고 있습니다.
    </p>
  </div>

  <div class="about-card">
    <h2>Our Mission</h2>
    <p>
      사업관리(PM) 글로벌 전문인력의 양성과 기업의 프로젝트 거버넌스 역량 강화를
      통해 한국의 프로젝트 관리 수준 향상에 기여합니다.
    </p>
  </div>

  <div class="about-card">
    <h2>What We Do</h2>
    <ul>
      <li>프로젝트 관리 체계 구축 및 컨설팅</li>
      <li>기업 출장, 공개 교육, 온라인 교육</li>
      <li>전문서적 집필, 출간, 판매</li>
      <li>Peoplecert, PMI 등 글로벌 기관과 협업</li>
      <li>Peoplecert, PMI Exam Voucher 판매</li>
      <li>프로젝트 관리 커뮤니티 운영</li>
    </ul>
  </div>
</section>

<section class="about-section">
  <div class="about-section__bar"></div>
  <h2>PRINCE2® Foundation &amp; Practitioner 온라인 과정</h2>
  <div class="enterprise-training">
    <div class="enterprise-training__block">
      <p class="enterprise-training__lead">국내 최초·유일 PRINCE2® 자격 대비 온라인 교육</p>
      <p>
        2013년 국내에 처음으로 PRINCE2를 도입한 이후 10여 년간 100회 이상의 PRINCE2 전문
        교육을 진행해온 노하우를 바탕으로, PRINCE2® Foundation &amp; Practitioner 자격 대비
        온라인 과정을 개설했습니다.
      </p>
      <p>
        PRINCE2 공인 강사(AT: Accredited Trainer)이자 PRINCE2 Ambassador인 정승원 대표가
        직접 개발하고 강의하여 핵심을 체계적으로 정리합니다.
      </p>
    </div>

    <div class="enterprise-training__list">
      <div class="enterprise-training__list-item">
        <span class="enterprise-training__index">01</span>
        <div class="enterprise-training__content">
          <h4>핵심 요약 + 실전 문제 풀이</h4>
          <p>출제 포인트 중심의 정리와 해설로 합격 전략을 명확히 제공합니다.</p>
        </div>
      </div>

      <div class="enterprise-training__list-item">
        <span class="enterprise-training__index">02</span>
        <div class="enterprise-training__content">
          <h4>100% 온라인 학습</h4>
          <p>시간과 장소의 제약 없이 원하는 속도로 학습할 수 있습니다.</p>
        </div>
      </div>

      <div class="enterprise-training__list-item">
        <span class="enterprise-training__index">03</span>
        <div class="enterprise-training__content">
          <h4>단계별 가이드와 실습 중심 구성</h4>
          <p>명확한 학습 로드맵과 적용형 콘텐츠로 단기간 자격 취득을 목표로 합니다.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="about-section">
  <div class="about-section__bar"></div>
  <h2>회사 주요 연혁</h2>
  <div class="company-timeline company-timeline--dark">
    {% assign items = site.data["prince2-timeline"] %}
    {% assign prev_year = "" %}

    {% for item in items %}
      {% assign date_parts = item.date | split: "-" %}
      {% assign year = date_parts[0] %}
      {% assign month = date_parts[1] %}

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

          <span class="company-name">{{ item.title }}</span>
        </div>
      </div>
    {% endfor %}
  </div>
</section>
