import React from 'react';
import Image from 'next/image';
import styles from './logo.module.scss'
import Link from "next/link";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link href={'/'}>
                <Image
                    src="/logo.svg" // Path relative to the public directory
                    alt="Description of the image"
                    width={500}
                    height={300}
                />
            </Link>

        </div>
    );
};

export default Logo;