interface Props {
    isComplete: boolean;
    value: string;
    onClick: () => void;
}

export default function ToDo({isComplete, onClick, value}: Props) {
    // TODO: useEffect를 통해 완료한 경우 3초 후(setTimeout)에 사라지도록 구현
    // TODO: 클린업까지 같이 구현

    return (
        <div onClick={onClick}
          className="to-do"
          data-is-complete={isComplete} // HTML의 data속성에 isComplete 값 저장
        >
          {/* isComplete이 true일때만 ✔️ 이모티콘 출력 */}
          <p>{isComplete && <span>&#10004;</span>}</p>
          <p>{value}</p>
        </div>
      )
}