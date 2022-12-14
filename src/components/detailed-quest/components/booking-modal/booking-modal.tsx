import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useRef, FormEvent } from 'react';
import { sendOrder } from 'store/api-actions';
import { useAppDispatch, useAppSelector } from 'hooks';
import { OrderPost } from 'types/order-post';
import { setModalOpeningStatus, setOrderErrorStatus } from 'store/action';
import { getFormBlockedStatus, getOrderErrorStatus, getOrderPostedStatus } from 'store/user-process/selectors';
import ServerError from 'components/server-error/server-error';
import { ERROR_MESSAGE_TIME } from 'helpers/const';

const BookingModal = () => {

  const dispatch = useAppDispatch();

  const nameRef = useRef<HTMLFormElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const peopleRef = useRef<HTMLInputElement | null>(null);
  const legalRef = useRef<HTMLInputElement | null>(null);

  const isFormBlocked = useAppSelector(getFormBlockedStatus);
  const isOrderPosted = useAppSelector(getOrderPostedStatus);
  const isOrderError = useAppSelector(getOrderErrorStatus);

  const onSubmit = (authData: OrderPost) => {
    dispatch(sendOrder(authData));
  };

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    let validity = '';
    const checkingRegExp = new RegExp(/^\d{10}$/);
    switch (false) {
      case checkingRegExp.test(target.value):
        validity = 'Номер телефона должен состоять из 10 цифр без префикса';
        break;
    }

    target.setCustomValidity(validity);
    target.reportValidity();
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (nameRef.current !== null && phoneRef.current !== null && peopleRef.current !== null && legalRef.current !== null) {
      onSubmit(
        {
          name: nameRef.current.value,
          peopleCount: Number(peopleRef.current.value),
          phone: phoneRef.current.value,
          isLegal: legalRef.current.value === 'on' ? true : false
        }
      );
    }
  };

  if (isOrderError) {
    setTimeout(() => {
      dispatch(setOrderErrorStatus(false));
    }, ERROR_MESSAGE_TIME)
  }

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={() => dispatch(setModalOpeningStatus(false))}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          method="post"
          id="booking-form"
          onSubmit={handleFormSubmit}
          name="form"
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="name"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              ref={nameRef}
              disabled={isFormBlocked}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              onInput={(evt: React.ChangeEvent<HTMLInputElement>) => {
                handleInputChange(evt);
              }}
              ref={phoneRef}
              disabled={isFormBlocked}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              ref={peopleRef}
              disabled={isFormBlocked}
              required
            />
          </S.BookingField>
          {
            isOrderError ? <ServerError /> : null
          }
          <S.BookingSubmit disabled={isFormBlocked} type="submit">{isOrderPosted ? 'Отправка заявки...' : 'Отправить заявку'}</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              ref={legalRef}
              disabled={isFormBlocked}
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
