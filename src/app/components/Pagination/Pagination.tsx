import React from 'react';
import Link from "next/link";
import styles from './pagination.module.scss';
import clsx from 'clsx';

interface MyProps{
    currentPage: number;
}

const Pagination: React.FC<MyProps> = ({currentPage}) => {
    return (
        <div className={styles.pagination}>
            <Link
                href={`/movies/${currentPage - 1}`}
                className={clsx(styles.link,currentPage === 1 ? styles.disabled : styles.active)}
            >
                Previous
            </Link>
            <Link
                className={styles.link}
                href={`/movies/${currentPage + 1}`}>Next</Link>
        </div>
    );
};

export default Pagination;