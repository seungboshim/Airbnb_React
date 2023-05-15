import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const styles = {
    h2: {
        fontWeight: "bold",
        fontSize: 22,
        marginTop: 40,
    },

    h3: {
        fontWeight: "normal",
        fontSize: 14,
        marginTop: 16,
        marginBottom: 20,
        color: "gray",
    },

    submitBtn: {
        margin: 8,
        border: "1px solid grey",
        backgroundColor: "white",
        cursor: "pointer",
    },
}

function WishList() {
    const [toDo, setTodo] = useState("");
    const toDos = useSelector((state) => state.toDos);
    const dispatch = useDispatch();

    const onChange = (e) => {
        setTodo(e.target.value);
        console.log('입력받음');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(toDo === "") {
            return;
        }
        dispatch({
            type: 'ADD', payload: toDo
        });
        setTodo("");
        console.log(toDo);
    };

    return (
        <div>
            <h1>위시리스트</h1>
            <div style={styles.h2}>첫 번째 위시리스트 만들기</div>
            <div style={styles.h3}>검색 중에 마음에 드는 숙소나 체험을 위시리스트에 저장하려면 하트 아이콘을 클릭하세요.</div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="입력하세요"
                    onChange={onChange}
                    value={toDo}
                />
                <button style={styles.submitBtn}>등록</button>
            </form>
            <ul>
                {toDos.map((item, index) => ( // toDos 배열의 값 출력
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default WishList;