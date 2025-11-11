import { Modal } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { DateTime } from 'luxon';

  setInterval(() => {
    hh.textContent = DateTime
    .local()
    .setLocale('ru')
    .toFormat('dd.LL.y HH:mm:ss');
  }, 1000);
