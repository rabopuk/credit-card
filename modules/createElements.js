/* eslint-disable max-len */
import { el, mount, setChildren, svg } from 'redom';

export const createElements = () => {
  const paymentTitle = el('div.payment-title', el('h1', 'Payment Information'));

  const logoSVG = svg(
    'svg',
    {
      version: '1.1',
      id: 'Layer_1',
      xmlns: 'http://www.w3.org/2000/svg',
      xmlnsXlink: 'http://www.w3.org/1999/xlink',
      x: '0px',
      y: '0px',
      width: '64px',
      height: '64px',
      viewBox: '0 0 64 64',
      enableBackground: 'new 0 0 64 64',
      xmlSpace: 'preserve',
    },
    svg('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      fill: '#0088CC',
      d:
        'M63.712,13.29L55.28,53.896C54.364,58.397,51.322,60,48.779,60c-1.312,0-2.674-0.393-4.052-1.171l-0.229-0.131l-0.214-0.16L26.75,45.302l-0.659,7.735c-0.344,1.807-1.988,3.105-3.859,2.951c-1.438-0.119-2.604-1.06-3.091-2.32l-2.926-8.785C16.081,44.613,16,44.317,16,44c0-1.105,0.895-2,2-2c0.873,0,1.605,0.56,1.879,1.338c0.002,0,0.005-0.002,0.007-0.005l2.402,7.215l0.352-4.129c0-0.005,0-0.005,0-0.007c0.218-2.645,2.538-4.613,5.183-4.396c0.873,0.07,1.666,0.381,2.335,0.847l16.535,12.482c0.77,0.434,1.47,0.654,2.086,0.654c1.277,0,2.184-0.95,2.581-2.901l8.448-40.682C60.498,9.596,59.249,8,57.568,8c-0.429,0-0.885,0.104-1.348,0.317L6.616,27.864c-3.387,1.389-3.367,3.318-0.618,4.177l8.199,2.616c0.002,0,0.01-0.005,0.012-0.003c0.562,0.175,1.195,0.114,1.733-0.223c0.01-0.005,0.017-0.003,0.026-0.008l21.938-13.825c1.859-1.146,4.301-0.591,5.474,1.261c0.997,1.573,0.751,3.571-0.468,4.87L31.414,38.226v0.002l-0.031,0.029l-0.002-0.002c-0.359,0.344-0.844,0.558-1.379,0.558c-1.105,0-2-0.895-2-2c0-0.536,0.213-1.021,0.558-1.38l-0.002-0.002l11.394-11.396L18.015,37.859c-1.566,0.95-3.396,1.12-5.023,0.604c-0.012-0.005-0.024,0-0.037-0.005l-8.15-2.599c-4.295-1.343-4.759-4.456-4.8-5.377c-0.065-1.552,0.506-4.438,5.093-6.32l0.024-0.01l0.026-0.01l49.515-19.51C55.61,4.213,56.587,4,57.568,4c1.959,0,3.766,0.87,4.958,2.391C63.926,8.17,64.345,10.618,63.712,13.29L63.712,13.29z M30,50c1.105,0,2,0.895,2,2s-0.895,2-2,2s-2-0.895-2-2S28.895,50,30,50L30,50z',
    }),
  );

  const ccsingle = el('div#ccsingle', logoSVG);

  const cardFront = svg('svg#cardfront', {
    'version': '1.1',
    'id': 'cardfront',
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'x': '0px',
    'y': '0px',
    'viewBox': '0 0 750 471',
    'style': 'enable-background:new 0 0 750 471;',
    'xml:space': 'preserve',
  });

  const frontSvgHTML = `
    <g id="Front">
      <g id="CardBackground">
        <g id="Page-1_1_">
          <g id="amex_1_">
            <path id="Rectangle-1_1_" class="lightcolor grey" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                  C0,17.9,17.9,0,40,0z" />
          </g>
        </g>
        <path class="darkcolor greydark"
          d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z" />
      </g>
      <text transform="matrix(1 0 0 1 60.106 295.0121)" id="svgnumber"
        class="st2 st3 st4">XXXX XXXX XXXX XXXX</text>
      <text transform="matrix(1 0 0 1 54.1064 428.1723)" id="svgname"
        class="st2 st5 st6">NAME SURNAME</text>
      <text transform="matrix(1 0 0 1 54.1074 389.8793)"
        class="st7 st5 st8">cardholder name</text>
      <text transform="matrix(1 0 0 1 479.7754 388.8793)"
        class="st7 st5 st8">expiration</text>
      <text transform="matrix(1 0 0 1 65.1054 241.5)"
        class="st7 st5 st8">card number</text>
      <g>
        <text transform="matrix(1 0 0 1 574.4219 433.8095)" id="svgexpire"
          class="st2 st5 st9">MM/YY</text>
        <text transform="matrix(1 0 0 1 479.3848 417.0097)"
          class="st2 st10 st11">VALID</text>
        <text transform="matrix(1 0 0 1 479.3848 435.6762)"
          class="st2 st10 st11">THRU</text>
        <polygon class="st2"
          points="554.5,421 540.4,414.2 540.4,427.9" />
      </g>
      <g id="cchip">
        <g>
          <path class="st2"
            d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
              c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z" />
        </g>
        <g>
          <g>
            <rect x="82" y="70" class="st12" width="1.5" height="60" />
          </g>
          <g>
            <rect x="167.4" y="70" class="st12" width="1.5" height="60" />
          </g>
          <g>
            <path class="st12"
              d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                  c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                  C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                  c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                  c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z" />
          </g>
          <g>
            <rect x="82.8" y="82.1" class="st12" width="25.8"
              height="1.5" />
          </g>
          <g>
            <rect x="82.8" y="117.9" class="st12" width="26.1"
              height="1.5" />
          </g>
          <g>
            <rect x="142.4" y="82.1" class="st12" width="25.8"
              height="1.5" />
          </g>
          <g>
            <rect x="142" y="117.9" class="st12" width="26.2"
              height="1.5" />
          </g>
        </g>
      </g>
    </g>
    <g id="Back">
    </g>
  `;

  cardFront.innerHTML = frontSvgHTML;

  const cardBack = svg('svg#cardfront', {
    'version': '1.1',
    'id': 'cardback',
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'x': '0px',
    'y': '0px',
    'viewBox': '0 0 750 471',
    'style': 'enable-background:new 0 0 750 471;',
    'xml:space': 'preserve',
  });

  const backSvgHTML = `
    <g id="Front">
      <line class="st0" x1="35.3" y1="10.4" x2="36.7" y2="11" />
    </g>
    <g id="Back">
      <g id="Page-1_2_">
        <g id="amex_2_">
          <path id="Rectangle-1_2_" class="darkcolor greydark" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
        C0,17.9,17.9,0,40,0z" />
        </g>
      </g>
      <rect y="61.6" class="st2" width="750" height="78" />
      <g>
        <path class="st3" d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
                  C707.1,246.4,704.4,249.1,701.1,249.1z" />
        <rect x="42.9" y="198.6" class="st4" width="664.1"
          height="10.5" />
        <rect x="42.9" y="224.5" class="st4" width="664.1"
          height="10.5" />
        <path class="st5"
          d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z" />
      </g>
      <text transform="matrix(1 0 0 1 621.999 227.2734)" id="svgsecurity"
        class="st6 st7">XXX</text>
      <g class="st8">
        <text transform="matrix(1 0 0 1 518.083 280.0879)"
          class="st9 st6 st10">security code</text>
      </g>
      <rect x="58.1" y="378.6" class="st11" width="375.5" height="13.5" />
      <rect x="58.1" y="405.6" class="st11" width="421.7" height="13.5" />
      <text transform="matrix(1 0 0 1 59.5073 228.6099)" id="svgnameback"
        class="st12 st13">John Johnson</text>
    </g>

  `;

  cardBack.innerHTML = backSvgHTML;


  const formContainer = el('div.form-container', [
    el('div.field-container', [
      el('label', { for: 'name' }, 'Name'),
      el('input#name', { type: 'text', maxlength: '20', placeholder: 'Name Surname' }),
    ]),
    el('div.field-container', [
      el('label', { for: 'cardnumber' }, 'Card Number'),
      el('input#cardnumber', { type: 'text', pattern: '[0-9]*', inputmode: 'numeric', placeholder: 'XXXX XXXX XXXX XXXX' }),
      el('svg#ccicon', { class: 'ccicon', width: '750', height: '471', viewBox: '0 0 750 471', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink' }, [
        // icon
      ]),
    ]),
    el('div.field-container', [
      el('label', { for: 'expirationdate' }, 'Expiration (mm/yy)'),
      el('input#expirationdate', { type: 'text', pattern: '[0-9]*', readonly: true, placeholder: 'MM/YY' }),
    ]),
    el('div.field-container', [
      el('label', { for: 'securitycode' }, 'Security Code'),
      el('input#securitycode', { type: 'text', pattern: '[0-9]*', inputmode: 'numeric', placeholder: 'XXX' }),
    ]),
  ]);

  const creditCardFront = el('div.front', [ccsingle, cardFront]);
  const creditCardBack = el('div.back', cardBack);
  const creditCard = el('div.creditcard', [creditCardFront, creditCardBack]);

  const container = el('div.container', creditCard);

  mount(document.body, container);

  setChildren(document.body, [paymentTitle, container, formContainer]);

  return {
    paymentTitle,
    ccsingle,
    cardFront,
    cardBack,
    formContainer,
    creditCardFront,
    creditCardBack,
    creditCard,
    container,
  };
};
