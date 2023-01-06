<<<<<<< HEAD

# 원티드 프리온보딩 8th - 1주차 과제

[![React Version](https://img.shields.io/badge/React-v18.2.0-blue)](https://ko.reactjs.org/)
[![Package Manager Version](https://img.shields.io/badge/npm-v8.12.1-yellow)](https://www.npmjs.com/)

원티드 프리온보딩 프론트엔드 인턴쉽 과정의 선발과제를 팀 단위로 진행 해보면서 동료학습을 경험하고 <br />이를 바탕으로 Best Practice 를 도출해내는 과제를 수행했습니다.

### 🗓 수행 기간

> 2023.01.03 - 2022.01.06

### 📢 배포 링크

> http://issuetracking-wanted.s3-website.ap-northeast-2.amazonaws.com/ > <br />

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

> https://www.notion.so/8-1-e616fa02748b428ebd94686ac7607fd7 > <br />

## Best Practice

과제에서 요구한 기능들의 구현 여부 및 Best Practice로 도출된 코드들에 대해 설명합니다.

### Assignment1

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

## 실행 방법

해당 프로젝트를 로컬서버에서 실행하기 위해서는 Git 과 Npm (node.js를 포함) 이 설치되어 있어야 합니다.

1. 레파지토리 클론

   ```
   https://github.com/preOnboarding8-team1/todo-list.git
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

        📂 src
        ┣ 📂 atom
        ┃ ┗ 📝index.js
        ┣ 📂 components
        ┃ ┣ 📝Assignees.jsx
        ┃ ┣ 📝IssueItem.jsx
        ┃ ┣ 📝IssueList.jsx
        ┃ ┣ 📝Loading.jsx
        ┃ ┗ 📝Nav.jsx
        ┣ 📂 hooks
        ┃ ┗ useDelay.jsx
        ┗ 📂 pages
          ┣ 📝Issue.jsx
          ┣ 📝IssueViewer.jsx
          ┗ 📝IssueWrite.jsx

</details>
