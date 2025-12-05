'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import Image from 'next/image';
import styles from './GuideCard.module.css';

interface GuideItemProps {
    icon: string;
    head: string;
    desc: string;
}

const GuideItem = ({ icon, head, desc }: GuideItemProps) => (
    <div className={styles.item}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.content}>
            <div className={styles.head}>{head}</div>
            <div className={styles.desc}>{desc}</div>
        </div>
    </div>
);

interface GuideCardProps {
    moleImage?: string;
}

export const GuideCard = ({ moleImage }: GuideCardProps) => {
    const cardContent = (
        <GlassCard className={styles.card}>
            <GuideItem icon="🔥" head="自習室を使い倒そう" desc="迷ったら来る。それが成績アップへの最短ルートです。自分の部屋だと思って積極的に活用しよう。" />
            <GuideItem icon="🤝" head="お互いにリスペクトを" desc="みんなが本気で勉強しています。大きな音や振動には気配りを。譲り合いの心が空間を良くします。" />
            <GuideItem icon="🤫" head="2号館は「没頭」エリア" desc="ここでの私語は厳禁です。静寂こそが最強の武器。深い集中を作りたい時は2号館へ。" />
            <GuideItem icon="🚦" head="移動は安全第一で" desc="校舎間の移動は交通ルールを守りましょう。焦る必要はありません。事故にはくれぐれも気をつけて。" />
        </GlassCard>
    );

    if (moleImage) {
        return (
            <div className={styles.wrapper}>
                <img
                    src={moleImage}
                    alt="モグラ"
                    className={styles.mole}
                />
                {cardContent}
            </div>
        );
    }

    return cardContent;
};
