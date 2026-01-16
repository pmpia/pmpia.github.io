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
  <h2>PRINCE2 주요 연혁</h2>
  <p>피엠피아의 PRINCE2 활동과 인증 성과를 연도별로 정리했습니다.</p>
  <div class="company-timeline prince2-timeline">
    {% assign items = site.data["prince2-timeline"] %}

    {% for item in items %}
      <div class="company-item">
        <div class="company-dot" aria-hidden="true"></div>

        <div class="company-row">
          <span class="company-year">{{ item.date }}</span>

          <div class="company-name">
            <div class="timeline-title">{{ item.title }}</div>
            {% if item.text %}
              <div class="timeline-summary">{{ item.text }}</div>
            {% endif %}
            {% if item.links and item.links.size > 0 %}
              {% assign has_links = false %}
              {% for link in item.links %}
                {% if link.url and link.url != "" %}
                  {% assign has_links = true %}
                {% endif %}
              {% endfor %}

              {% if has_links %}
                <div class="timeline-links">
                  {% assign has_link = false %}
                  {% for link in item.links %}
                    {% if link.url and link.url != "" %}
                      {% if has_link %}
                        &nbsp;·&nbsp;
                      {% endif %}
                      <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
                      {% assign has_link = true %}
                    {% endif %}
                  {% endfor %}
                </div>
              {% endif %}
            {% endif %}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</section>
