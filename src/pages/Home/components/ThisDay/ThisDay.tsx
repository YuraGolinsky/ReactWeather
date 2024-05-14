import React, { useEffect, useState } from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';
import s from './ThisDay.module.scss';

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Обновляем время каждую секунду

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const formattedDate = currentTime.toLocaleDateString([], {
    weekday: 'long',
  });

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>15°</div>
          <div className={s.this__day_name}>{formattedDate}</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>{formattedTime}</span>
        </div>
        <div className={s.this__city}>
          Город: <span>Одесса</span>
        </div>
      </div>
    </div>
  );
};
