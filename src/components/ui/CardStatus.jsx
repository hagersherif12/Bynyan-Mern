import styles from "./CardStatus.module.css"
function CardStatus({counter , tittle}) {
    return (
        <>
            <div className={`${styles.CardItem} w-100 h-100 d-flex  align-items-center justify-content-around`}>
                <i className={`fa-solid fa-building fs-3 `}></i>
                <div className={`${styles.info}`}>
                    <span className={`${styles.counter} d-block`}>{counter}</span>
                    <span className={`${styles.tittle} d-block`}>{tittle}</span>
                </div>
            </div>
        </>
    )
}

export default CardStatus;