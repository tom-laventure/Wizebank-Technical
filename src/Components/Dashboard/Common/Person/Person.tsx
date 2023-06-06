import styles from "./Person.module.scss"

export interface PersonType {
	name: string
}

const Person = ({ name }: PersonType) => {
	const firstLetter: string = name[0].toUpperCase()
	return <div className={styles["person"]}>{firstLetter}</div>
}

export default Person
