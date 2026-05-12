import styles from "./Status.module.css"
import CardStatus from "../../ui/CardStatus";
function Status() {
    return (
        <>
            <div className="container">
                <div className="row justify-content-between align-items-center mx-2">
                    <div className={`col-12 col-md-3 ${styles.cardStatus} ${styles.cardHight}`}>
                        <CardStatus counter="100" tittle="Users" />
                    </div>
                    <div className={`col-12 col-md-3 ${styles.cardStatus} ${styles.cardHight}`}>
                        <CardStatus counter="200" tittle="Projects" />
                    </div>
                    <div className={`col-12 col-md-3 ${styles.cardStatus} ${styles.cardHight}`}>
                        <CardStatus counter="130" tittle="Developers" />
                    </div>
                    <div className={`col-12 col-md-3 ${styles.cardStatus} ${styles.cardHight}`}>
                        <CardStatus counter="80" tittle="Blogs" />
                    </div>

                </div>
            </div>
        </>
    )
}
export default Status;