### 커스텀 컴포넌트를 나누는 기준

1. UI 베이스 컴포넌트는 MUI(v5)를 사용한다.
2. 기본적인 컴포넌트를 나누는 방식은 atomic design 을 기반으로 한다. 이 때, **MUI의 Input, data display 컴포넌트들은 하나의 atom** 이라고 생각하고 나누기로 했다.

> - atoms : Layout 관련 컴포넌트를 제외하고 단 하나의 MUI component 를 가지고 만든 컴포넌트
> - molecules : 두개 이상의 MUI 컴포넌트 혹은 커스텀 atom 컴포넌트를 조합하여 만든 컴포넌트
> - organisms : 두개 이상의 MUI 컴포넌트 혹은 커스텀 atom, molecules 컴포넌트를 조합하여 만든 컴포넌트, molecules와 구분이 애매한데 organisms은 페이지에서 하나의 섹션을 담당하고 molecules는 한 섹션을 이루는 구성요소라고 생각했다.
> - templates : 여러 컴포넌트들을 조합하여 하나의 페이지를 구성.
> - pages : OOP로 치면 templates은 class , pages는 객체로 두고 pages 실제 동작, 데이터들을 정의한다.
