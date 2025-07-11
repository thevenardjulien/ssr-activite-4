import styles from '@/styles/Home.module.css'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${styles.container} flex flex-col gap-10`}>
            {children}
        </div>
    )
}