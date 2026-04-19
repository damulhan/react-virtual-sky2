# React Virtual Sky 2

이 프로젝트는 [raajon/react-virtual-sky](https://github.com/raajon/react-virtual-sky)를 기반으로 하여 성능과 유지보성성을 개선하고 최신 기술 스택으로 업그레이드한 라이브러리입니다.

## 주요 개선 사항

*   **최신 스택 전환**: Create React App 기반에서 **Vite**로 전환하여 더 빠른 개발 환경과 빌드 성능을 제공합니다.
*   **D3.js v7 업그레이드**: 오래된 D3 v3 라이브러리를 최신 **D3 v7**로 업그레이드하여 성능과 기능을 강화했습니다.
*   **코드 리팩토링**: 전체적인 코드를 현대적인 JavaScript(ES6+) 및 React 스타일로 리팩토링하여 가독성과 유지보수성을 높였습니다.
*   **다국어 지원(i18n) 확장**: 기존 언어 외에 다음 언어들을 새롭게 추가하였습니다:
    *   프랑스어 (French)
    *   갈리시아어 (Galician)
    *   폴란드어 (Polish)
    *   포르투갈어 (Portuguese)
*   **좌표 변환 최적화**: `radec2xy` 및 `azel2xy` 투영 로직을 정리하여 렌더링 정확도를 개선했습니다.

## 설치 및 실행

### 패키지 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

## 라이선스
이 프로젝트는 원본 프로젝트의 라이선스를 따릅니다.
