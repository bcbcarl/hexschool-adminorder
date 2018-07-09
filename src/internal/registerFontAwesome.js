import { library } from '@fortawesome/fontawesome-svg-core';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { faBoxes } from '@fortawesome/free-solid-svg-icons/faBoxes';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons/faHandHoldingUsd';
import { faMale } from '@fortawesome/free-solid-svg-icons/faMale';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons/faMoneyBill';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons/faShoppingBag';
import { faWordpress } from '@fortawesome/free-brands-svg-icons/faWordpress';

const registerFontAwesome = () => {
  library.add(
    faArrowDown,
    faArrowUp,
    faBoxes,
    faClock,
    faFacebook,
    faGoogle,
    faHandHoldingUsd,
    faMale,
    faMoneyBill,
    faShoppingBag,
    faWordpress
  );
};

export default registerFontAwesome;
