# 원티드 프리온보딩 8th - 2주차 과제

[![React Version](https://img.shields.io/badge/React-v18.2.0-blue)](https://ko.reactjs.org/)
[![Package Manager Version](https://img.shields.io/badge/npm-v8.12.1-yellow)](https://www.npmjs.com/)

원티드 프리온보딩 프론트엔드 인턴쉽 과정의 선발과제를 팀 단위로 진행 해보면서 동료학습을 경험하고 <br />이를 바탕으로 Best Practice 를 도출해내는 과제를 수행했습니다.

### 🗓 수행 기간

> 2023.01.03 - 2022.01.06

### 📢 배포 링크

> http://issuetracking-wanted.s3-website.ap-northeast-2.amazonaws.com/

<br />

## 📚 목차

- [팀 정보](#팀-정보)
- [Best Practice](#best-practice)
- [실행 방법](#실행-방법)
- [디렉토리 구조](#디렉토리-구조)

<br />

## 팀 정보

원티드 프리온보딩 프론트엔드 인턴쉽 과정 1팀입니다.

### Members

<table>
    <tr>
        <td align="center">
            <a href="https://github.com/hyejj19">
                <img src="https://avatars.githubusercontent.com/u/89173923?v=4" width="100px;" alt="박혜정"/>
                <br />
                <sub>
                    <b>박혜정</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=hyejj19" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/minsang98">
                <img src="https://avatars.githubusercontent.com/u/64800318?v=4" width="100px;" alt="김민상"/>
                <br />
                <sub>
                    <b>김민상</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=minsang98" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/kwakhyun">
                <img src="https://avatars.githubusercontent.com/u/73919235?v=4" width="100px;" alt="곽현"/>
                <br />
                <sub>
                    <b>곽현</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=kwakhyun" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/badmaniacs">
                <img src="https://avatars.githubusercontent.com/u/96967183?v=4" width="100px;" alt="박경태"/>
                <br />
                <sub>
                    <b>박경태</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=badmaniacs" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/zkzk8953">
                <img src="https://avatars.githubusercontent.com/u/78520794?s=400&u=355629856caf2969fe39e5cc7f4a07f800e90f5d&v=4" width="100px;" alt="seoungheon lee"/>
                <br />
                <sub>
                    <b>이성헌</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=zkzk8953" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/rewrite0w0">
                <img src="https://avatars.githubusercontent.com/u/55968557?v=4" width="100px;" alt="오태준"/>
                <br />
                <sub>
                    <b>오태준</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=rewrite0w0" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/bigwave-cho">
                <img src="https://avatars.githubusercontent.com/u/105909665?v=4" width="100px;" alt="조재현"/>
                <br />
                <sub>
                    <b>조재현</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=bigwave-cho" title="Code">💻</a>
        </td> 
        <td align="center">
            <a href="https://github.com/JeongTaekCho">
                <img src="https://avatars.githubusercontent.com/u/92679073?v=4" width="100px;" alt="조정택"/>
                <br />
                <sub>
                    <b>조정택</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=JeongTaekCho" title="Code">💻</a>
        </td> 
        <td align="center">
            <a href="https://github.com/aydenote">
                <img src="https://avatars.githubusercontent.com/u/77476077?v=4" width="100px;" alt="최승수"/>
                <br />
                <sub>
                    <b>최승수</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=aydenote" title="Code">💻</a>
        </td>                 
    </tr>
</table>

### Notion

> https://galvanized-gecko-b10.notion.site/Code-Wiki-week-2-6d55122209b34219b595097fa55387c8

<br />

## Best Practice

과제에서 요구한 기능들의 구현 여부 및 Best Practice로 도출된 코드들에 대해 설명합니다.

### Assignment1

- [x] 이슈 목록 보기 기능

  - "할 일", "진행 중", "완료"가 존재하며 칸반 보드와 같이 상태별로 분류된다.
  - 이슈는 각각 고유번호, 제목, 내용, 마감일, 상태, 담당자가 존재한다.
  - 데이터는 새로고침해도 유지될 수 있도록 관리한다.

  <br />

  ```jsx
  // atoms>index.js
  // issues 의 filter 메서드 추상화
  export const filteredIssueState = selectorFamily({
    key: 'filteredIssueState',
    get:
      (status) =>
      ({ get }) => {
        const issuesStateSnapShot = get(issuesState);
        return issuesStateSnapShot.filter((v) => v.status === status);
      },
  });

  //pages > Issue.jsx
  <IssueListContainer>
    {ISSUES_STATUS.map((v) => (
      <IssueList
        key={v}
        title={v}
        status={v}
        handleOnDragStart={handleOnDragStartDelay}
        handleOnDragOver={handleOnDragOver}
        handleOnDrop={handleOnDropDelay}
      />
    ))}
  </IssueListContainer>;

  //components > IssueList
  const issues = useRecoilValue(filteredIssueState(status));
  ```

  <br />

  > 📌 전체 issues 를 localStorage에 저장하고 Recoil Atom 전역 상태로 관리합니다.  
  > 📌 Recoil의 selectorFamily를 활용해 filter 메서드를 추상화하여 중복된 코드를 개선했습니다.  
  > 📌 각 상태에 해당하는 배열을 filtering 한 후 List 컴포넌트에 전달합니다.

### Assignment2

- [x] 이슈 추가 기능

  - [x] 이슈의 작성 폼에서는 제목, 내용, 마감일, 상태, 담당자를 입력할 수 있다.
  - [x] 사전에 임의의 담당자 목록을 구성하고, `<input type=”text”>` 태그를 사용해 검색하여 담당자를 지정한다.

  <br />

  ```jsx
  // handleOnSubmit
  if (issues) {
    const nextId = Math.max(...issues.map((v) => v.id)) + 1;
    const newIssue = { id: nextId, assignees, title, desc, dueDate: date, status };
    const newIssues = [...issues, newIssue];
    localStorage.setItem('issues', JSON.stringify(newIssues));
    setIssues(newIssues);
  }

  //components > Assignees.jsx
  const [suggestions, setSuggestions] = useState(INITIAL_SUGGESTIONS);

  const handleAddAssignees = (name) => {
    setAssignees((prevState) => {
      const newState = [...prevState];
      if (newState.includes(name)) return newState.filter((v) => v !== name);
      return [...newState, name];
    });
  };
  ```

  <br />

  > 📌 form 안의 내용을 state로 관리하고, onSubmit 이벤트가 발생하면 해당 데이터로 새로운 이슈를 생성해 로컬스토리지에 저장 및 전역 상태를 업데이트 합니다.
  > 📌 미리 작성해둔 INITIAL_SUGGESTIONS 배열을 초기상태로 지정하고, 목록을 클릭하면 클릭한 담당자가 포함되도록 assignees state를 업데이트 합니다.

### Assignment3

- [x] 이슈 상세 보기 기능

  - [x] 각 이슈를 클릭 시 상세정보 창이 표시된다.
  - [x] 상세정보창에서는 이슈의 각 정보를 수정할 수 있으며, “저장”버튼을 클릭 시 수정한 내용이 반영된다.

  <br />

  ```jsx
  // pages > IssueViewr.jsx
  const handleNavigate = () => navigate('/issue/write', { state });
  const handleDelete = () => {
    const newIssues = issues.filter((v) => v.id !== id);
    localStorage.setItem('issues', JSON.stringify(newIssues));
    setIssues(issues.filter((v) => v.id !== id));
    navigate('/');
  };
  ```

  <br />

  > 📌 개별 issue를 클릭할 경우 content 가 포함된 이슈의 상세 내용을 볼 수 있습니다.
  > 📌 `navigate` 를 사용하여 수정 버튼 클릭시 작성/수정 페이지로 이동합니다. `navigate`의 두 번째 인자로 현재 데이터를 전달합니다.

---

### Assignment4

- [x] 이슈 정보 수정 기능 (데이터 수정/삭제/dnd)

  - [x] 이슈 목록에서 마우스의 Drag & Drop 이벤트를 활용해 이슈의 순서를 변경할 수 있다.
  - [x] 변경된 순서는 고유번호순 정렬보다 우선해서 적용된다.
  - [x] 이슈 목록에서 마우스의 Drag & Drop 이벤트를 활용해 이슈의 상태를 변경할 수 있다.

  <br />

  ```jsx
  const [issues, setIssues] = useRecoilState(issuesState);
  const [dragItem, setDragItem] = useState({});

  const todoIssues = issues.filter((v) => v.status === 'Todo');
  const inProgressIssues = issues.filter((v) => v.status === 'In Progress');
  const doneIssues = issues.filter((v) => v.status === 'Done');

  const handleOnDragStart = (issue) => {
    setDragItem(issue);
  };
  const handleOnDragOver = (e) => {
    e.preventDefault();
  };
  const handleOnDrop = (e) => {
    e.preventDefault();
    const classNames = e.target.className.split(' ');
    const prevIssues = issues.filter((v) => v.status === dragItem.status);
    const prevIdx = prevIssues.indexOf(dragItem);
    prevIssues.splice(prevIdx, 1);
    if (['Todo', 'In Progress', 'Done'].includes(e.target.id)) {
      if (e.target.id !== dragItem.status) {
        const newIssue = { ...dragItem, status: e.target.id };
        const nextIssues = issues.filter((v) => v.status === newIssue.status);

        const another = issues.filter((v) => v.status !== newIssue.status).filter((v) => v.status !== dragItem.status);
        if (classNames.includes('first')) {
          nextIssues.unshift(newIssue);
        } else if (classNames.includes('last')) {
          nextIssues.push(newIssue);
        } else {
          nextIssues.splice(+classNames[2], 0, newIssue);
        }
        const result = [...another, ...prevIssues, ...nextIssues];
        localStorage.setItem('issues', JSON.stringify(result));
        setIssues(result);
      } else {
        if (classNames.includes('first')) {
          prevIssues.unshift(dragItem);
        } else if (classNames.includes('last')) {
          prevIssues.push(dragItem);
        } else if (prevIdx >= +classNames[2]) {
          prevIssues.splice(+classNames[2], 0, dragItem);
        } else {
          prevIssues.splice(+classNames[2] - 1, 0, dragItem);
        }
        const another = issues.filter((v) => v.status !== dragItem.status);
        const result = [...another, ...prevIssues];
        localStorage.setItem('issues', JSON.stringify(result));
        setIssues(result);
      }
    }
  };
  ```

  > 📌 Drag 이벤트가 시작할 때 옮기고자 하는 Item을 dragItem state에 저장합니다.  
  > 📌 Drag Drop이벤트가 발생할 때 전체 Issues의 배열에서 dragItem과 같은 status를 가지는 배열을 추출합니다.(prevIssues)  
  > 📌 prevIssues배열에서 dragItem을 제거합니다.  
  > 📌 이동하고자 하는 위치를 찾아 해당 위치의 status와 index를 확인합니다.  
  > 📌 dragItem의 status와 다를 경우 dragItem의 status를 변경한 newIssue를 생성합니다.  
  > 📌 전체 Issues배열에서 newIssue와 같은 status를 가지는 배열을 추출합니다. (nextIssues)  
  > 📌 이동시키고자 하는 index를 찾아 nextIssues의 배열에 dragItem을 추가합니다.  
  > 📌 전체 배열에서 nextIssues와 prevIssues를 제외한 배열을 another변수에 저장합니다.  
  > 📌 prevIssues, nextIssues, another 3개의 배열을 합쳐 Issues state에 재할당하여 Drag&Drop을 구현했습니다.
  > <br />

```jsx
//IssueViewer
const handleNavigate = () => navigate('/issue/write', { state })

//IssueWrite
const { state } = useLocation();

seEffect(() => {
    if (typeof state === 'object') {
      setTitle(state.title);
      setDesc(state.desc);
      setAssigness(state.assignees);
      setDate(state.dueDate);
      setStatus(state.status);
    } else if (typeof state === 'string') {
      setStatus(state);
    }
  }, []);

// handleOnSubmit
if (typeof state === 'object') {
      const patchIssue = { ...state, assignees, title, desc, dueDate: date, status };
      const newIssues = [...issues].map((v) => {
        if (v.id === state.id) return patchIssue;
        return v;
      });
      localStorage.setItem('issues', JSON.stringify(newIssues));
      setIssues(newIssues);

// 삭제 코드
const handleDelete = () => {
    const newIssues = issues.filter((v) => v.id !== id);
    localStorage.setItem('issues', JSON.stringify(newIssues));
    setIssues(issues.filter((v) => v.id !== id));
    navigate('/');
  };
```

> 📌 write page로 이동할 때 navigate의 두번째 인자로 수정페이지와 글쓰기 페이지를 나누고 있습니다.  
> 📌 state가 object로 들어온다면 수정 페이지를 띄우고 있습니다.  
> 📌 수정, 삭제시 결과가 들어있는 새로운 newIssues를 localstorage에 저장하여 데이터를 보관하고 있습니다.

### Assignment5

- [x] 로딩 UX, 딜레이 적용

  - [x] 데이터가 로딩중인 경우 사용자가 이를 인식할 수 있도록 UX를 고려해야 하며, 로딩 중에는 액션이 발생하는 것을 방지해야한다.
  - [x] 각 기능들은 실수로 인한 중복 액션을 방지하기 위해 실행 후 0.5초의 딜레이를 적용한다.

  <br />

  ```jsx
  // src > App.jsx
  <Suspense fallback={<Loading />}>
    <Issue />
  </Suspense>;

  // hooks > useDelay.jsx
  export const useDelay = (func) => {
    const [isFlag, setIsFlag] = useState(true);

    const delay = (v) => {
      if (isFlag) {
        setIsFlag(false);
        func(v);
        setTimeout(() => setIsFlag(true), 500);
      }
    };
    return delay;
  };

  // pages > Issue.jsx
  const handleOnDragStartDelay = useDelay(handleOnDragStart);
  ```

  > 📌 Loading 컴포넌트를 만들어 Suspense fallback 속성으로 전달하여 delay 발생시 동작하도록 UX를 고려하여 작성했습니다.
  > 📌 `useDelay` 훅을 만들어 전달되는 함수가 0.5초 뒤에 실행되도록 하였습니다.

<br />

## 실행 방법

해당 프로젝트를 로컬서버에서 실행하기 위해서는 Git 과 Npm (node.js를 포함) 이 설치되어 있어야 합니다.

1. 레파지토리 클론

   ```
   https://github.com/preOnboarding8-team1/pre-onboarding-8th-2-1.git
   ```

2. packages 설치

   ```
   npm install
   ```

3. 실행

   ```
   npm start
   ```

<br />

## 디렉토리 구조

<details>
    <summary>Repository Overview</summary>
    <div>

        ┣ 📂 src
          ┣ 📂 atom
          ┃ ┗ 📝 index.js
          ┣ 📂 components
          ┃ ┣ 📝 Assignees.jsx
          ┃ ┣ 📝 IssueItem.jsx
          ┃ ┣ 📝 IssueList.jsx
          ┃ ┣ 📝 Loading.jsx
          ┃ ┗ 📝 Nav.jsx
          ┣ 📂 hooks
          ┃ ┗ 📝 useDelay.jsx
          ┗ 📂 pages
            ┣ 📝 Issue.jsx
            ┣ 📝 IssueViewer.jsx
            ┗ 📝 IssueWrite.jsx

</details>
