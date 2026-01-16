---
layout: default
title: 홈
permalink: /
nav: false
---

<div class="home">
  <section class="home-hero home-reveal">
    <div class="home-hero__grid">
      <div class="home-hero__content home-reveal home-reveal--delay-1">
        <div class="home-eyebrow">PMPIA | Project Management Education</div>
        <h1>프로젝트 성과를 만드는 실무 중심 교육과 컨설팅</h1>
        <p class="home-lead">
          2010년 설립 이후 25년+ 교육 경험을 축적한 PMPIA는 프로젝트 관리 표준과 현장 실행력을
          동시에 갖춘 전문가 양성을 돕습니다. Peoplecert 공인 교육기관(ATO/AEO) 기반의 체계로
          국제 자격과 실무 적용을 함께 준비하세요.
        </p>
        <div class="home-cta">
          <a class="home-btn home-btn--primary" href="{{ '/classes/' | relative_url }}">교육 과정 보기</a>
          <a class="home-btn home-btn--ghost" href="{{ '/about-us/' | relative_url }}">회사 소개</a>
        </div>
        <div class="home-metrics">
          <div class="home-metric">
            <span class="home-metric__value">25년+</span>
            <span class="home-metric__label">교육 노하우</span>
          </div>
          <div class="home-metric">
            <span class="home-metric__value">1만명+</span>
            <span class="home-metric__label">누적 수강생</span>
          </div>
          <div class="home-metric">
            <span class="home-metric__value">500회+</span>
            <span class="home-metric__label">교육 운영</span>
          </div>
        </div>
      </div>

      <div class="home-hero__stack">
        <div class="home-hero__card home-reveal home-reveal--delay-2">
          <h3>교육 방향</h3>
          <ul>
            <li>표준 템플릿과 케이스 스터디 기반의 실무 적용</li>
            <li>조직 환경에 맞춘 프로세스 설계 및 실행 역량 강화</li>
            <li>국제 표준(PMBOK, PRINCE2, Agile) 해석 역량 확보</li>
          </ul>
        </div>
        <div class="home-hero__card home-reveal home-reveal--delay-3">
          <h3>공식 인증 트랙</h3>
          <p>국내 유일의 PRINCE2 공인 ATO로서 1,000명+ Foundation, 500명+ Practitioner 합격자를 배출했습니다.</p>
          <p>자격 취득 이후에도 갱신과 실무 상담을 지속 지원합니다.</p>
        </div>
        <div class="home-hero__card home-reveal home-reveal--delay-3">
          <div class="home-hero__media">
            <div>
              <h3>대표 강사 소개</h3>
              <span>정승원 대표 · Peoplecert Ambassador</span><br>
              <a class="home-btn home-btn--ghost" href="{{ '/instructors/' | relative_url }}">프로필 보기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="home-section home-reveal">
    <h2>PMPIA 교육의 핵심 가치</h2>
    <p class="home-lead home-lead--muted">
      이론이 아닌 적용, 강의가 아닌 워크샵, 표준을 우리 조직에 맞게 재해석하는 힘을 제공합니다.
    </p>
    <div class="home-card-grid">
      <div class="home-card home-card--accent">
        <h3>Case Study 중심 워크샵</h3>
        <p>단순 강의가 아닌 실습 기반 워크샵으로, 프로젝트 환경에 맞춘 해결 경험을 축적합니다.</p>
      </div>
      <div class="home-card home-card--accent">
        <h3>조직 맞춤형 프로세스</h3>
        <p>의사결정 구조와 성과 지표에 맞는 산출물과 프로세스를 함께 설계합니다.</p>
      </div>
      <div class="home-card home-card--accent">
        <h3>검증된 교육 신뢰도</h3>
        <p>25년+ 교육 운영과 국내 주요 기업 100여 곳의 채택 경험으로 검증된 커리큘럼을 제공합니다.</p>
      </div>
    </div>
  </section>

  <section class="home-section home-reveal">
    <div class="home-programs">
      <div class="home-cta home-cta--split">
        <div>
          <h2>교육 과정</h2>
          <p class="home-lead home-lead--muted home-lead--compact">
            실무 과정과 자격 대비 과정을 한 곳에서 확인하세요.
          </p>
        </div>
        <a class="home-btn home-btn--primary" href="{{ '/classes/' | relative_url }}">전체 과정 보기</a>
      </div>
      <div class="home-programs__grid">
        <div class="home-program">
          <h3>실무 과정</h3>
          <div class="home-program__list">
            <ul>
              {% assign practical = site.projects | where: "category", "실무 과정" | sort: "importance" %}
              {% for project in practical %}
                <li><a href="{{ project.url | relative_url }}">{{ project.title }}</a></li>
              {% endfor %}
            </ul>
          </div>
        </div>
        <div class="home-program">
          <h3>자격대비 과정</h3>
          <div class="home-program__list">
            <ul>
              {% assign cert = site.projects | where: "category", "자격대비 과정" | sort: "importance" %}
              {% for project in cert %}
                <li><a href="{{ project.url | relative_url }}">{{ project.title }}</a></li>
              {% endfor %}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="home-section home-reveal">
    <div class="home-split">
      <div>
        <h2>교육 제공 방식</h2>
        <p class="home-lead home-lead--muted">
          오프라인 집체교육, 온라인 과정, Microsoft Teams 기반 라이브 강좌,
          기업 맞춤형 위탁 교육까지 목적과 환경에 맞춘 방식을 제공합니다.
        </p>
        <p class="home-text-muted">
          표준 템플릿과 케이스 스터디를 중심으로 학습을 설계하고, 교육 이후 현장 적용까지
          연결되는 실행 로드맵을 제공합니다.
        </p>
      </div>
      <div class="home-card">
        <h3>지원 범위</h3>
        <p>조직 진단 → 커리큘럼 설계 → 워크샵 운영 → 현업 적용 피드백까지 단계별로 지원합니다.</p>
        <p>PMO 구축, 프로젝트 거버넌스 강화, 국제 자격 취득까지 통합적으로 연결됩니다.</p>
      </div>
    </div>
  </section>

  <section class="home-section home-community home-reveal">
    <h2>커뮤니티 &amp; 소셜</h2>
    <p class="home-lead home-lead--muted">
      프로젝트 관리 실무자 네트워크와 최신 정보를 공유하는 커뮤니티 채널을 운영합니다.
    </p>
    <div class="home-cta home-cta--compact">
      <a class="home-btn home-btn--ghost" href="https://cafe.naver.com/pmplaza" target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-mug-hot fa-sm"></i> 프로젝트 관리 전문 네이버카페
      </a>
      <a class="home-btn home-btn--ghost" href="https://cafe.naver.com/prince2group" target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-mug-hot fa-sm"></i> PRINCE2 전문 네이버카페
      </a>
      <a class="home-btn home-btn--ghost" href="https://www.facebook.com/pmpia" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-facebook fa-sm"></i> PMPIA Facebook
      </a>
      <a class="home-btn home-btn--ghost" href="https://www.instagram.com/pmpia/" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-instagram fa-sm"></i> PMPIA Instagram
      </a>
    </div>
  </section>
</div>
