'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLiff } from '@/lib/liff';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { FormGroup } from '@/components/FormGroup';
import { FormSelect } from '@/components/FormSelect';
import { BackLink } from '@/components/BackLink';
import { LoadingOverlay } from '@/components/LoadingOverlay';
import { DateSelect } from '@/components/DateSelect';
import { TimeSelect } from '@/components/TimeSelect';
import { CONFIG } from '@/lib/config';
import { ApiResponse, BookingRequest } from '@/types';

export default function BookingPage() {
    const router = useRouter();
    const { profile, isLoggedIn, isLoading: isLiffLoading } = useLiff();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form State
    const [formData, setFormData] = useState<Omit<BookingRequest, 'userId'>>({
        meetingType: '面談',
        date: '',
        arrivalTime: 'T14:00:00',
        leaveTime: 'T15:00:00',
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!profile?.userId) return;

        // Validation
        if (!formData.date) {
            alert('日付を選択してください。');
            return;
        }
        if (formData.arrivalTime >= formData.leaveTime) {
            alert('退塾時間は来塾時間より後に設定してください。');
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await fetch(CONFIG.API.RESERVE_MEETING, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: profile.userId,
                    ...formData,
                } as BookingRequest),
            });

            const data: ApiResponse = await res.json();

            if (data.status === 'ok') {
                alert('予約が完了しました！');
                router.push('/booking');
            } else {
                throw new Error(data.message || '予約に失敗しました');
            }
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            alert(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLiffLoading) {
        return <LoadingOverlay />;
    }

    if (!isLoggedIn) {
        return <div className="container"><p>ログインが必要です。</p></div>;
    }

    return (
        <div className="container">
            <header>
                <h1><span className="brand">Seras学院</span> 面談予約</h1>
            </header>

            <GlassCard className="animate-slide-up" style={{ textAlign: 'left' }}>
                <form onSubmit={handleSubmit}>
                    <FormGroup label="面談タイプ">
                        <FormSelect
                            name="meetingType"
                            value={formData.meetingType}
                            onChange={handleChange}
                            required
                        >
                            {CONFIG.MEETING_TYPES.map(type => (
                                <option key={type.value} value={type.value}>{type.label}</option>
                            ))}
                        </FormSelect>
                    </FormGroup>

                    <FormGroup label="日付">
                        <DateSelect
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>

                    <FormGroup label="来塾時間">
                        <TimeSelect
                            name="arrivalTime"
                            value={formData.arrivalTime}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>

                    <FormGroup label="退塾時間">
                        <TimeSelect
                            name="leaveTime"
                            value={formData.leaveTime}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>

                    <Button type="submit" variant="primary" disabled={isSubmitting}>
                        {isSubmitting ? '送信中...' : '予約する'}
                    </Button>
                </form>

                <BackLink href="/booking">
                    メニューに戻る
                </BackLink>
            </GlassCard>
        </div>
    );
}
