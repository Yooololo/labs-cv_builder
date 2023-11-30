import { FieldName, UserFormValues } from '../../assets/typeUtils'
import styles from './styles.module.scss'

const Page = ({ data }: { data: UserFormValues }) => {
  return (
    <div className={styles.page__wrapper}>
      <div className={styles.page__curriculum__container}>
        <header>
          {' '}
          aca irian linkedin y eso, imagen si va y nombre y puesto
          <img
            className={styles.page__curriculum__profilePicture}
            src={data?.[FieldName.ProfilePicture]?.[FieldName.ImageURL]}
            alt="profile picture"
          />
        </header>
        <div className={styles.page__curriculum}>
          <div className={styles.page__curriculum__column}></div>
          <div className={styles.page__curriculum__column}></div>
        </div>
      </div>
    </div>
  )
}

export default Page
