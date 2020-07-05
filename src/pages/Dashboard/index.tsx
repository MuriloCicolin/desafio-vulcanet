import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiLoader } from 'react-icons/fi';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  Container,
  Main,
  MainPlan,
  Title,
  Button,
  ListPlans,
  AttendentsContainer,
  CountAttendentsContainer,
  Footer,
  TotalContainer,
  ButtonFooter,
} from './styles';

import Vector from '../../assets/Vector.png';
import Check from '../../assets/check.svg';

import formatValue from '../../utils/formatValue';

import Header from '../../components/Header';

import api from '../../services/api';

interface IPlans {
  id: number;
  description: string;
  features: string[];
  name: string;
  quantity: number;
  prices: {
    monthly: number;
    yearly: number;
  };
}

interface IAttendant {
  cost: number;
}

const Dashboard: React.FC = () => {
  const [plans, setPlans] = useState<IPlans[]>([]);
  const [attendant, setAttendant] = useState({} as IAttendant);
  const [selectedButton, setSelectedButton] = useState(1);
  const [selected, setSelected] = useState(true);
  const [countAttendant, setCountAttendant] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPlans() {
      setLoading(true);
      const response = await api.get('/plans');
      setPlans(response.data);
      setLoading(false);
    }
    loadPlans();
  }, []);

  useEffect(() => {
    api.get('/attendant').then(response => {
      setAttendant(response.data);
    });
  }, []);

  function handleSelectedButton(id: number): void {
    setSelectedButton(id);
  }

  const handleSelect = useCallback(() => {
    setSelected(!selected);
  }, [selected]);

  const handleIncrement = useCallback(() => {
    setCountAttendant(countAttendant + 1);
  }, [countAttendant]);

  const handleDecrement = useCallback(() => {
    countAttendant !== 0 && setCountAttendant(countAttendant - 1);
  }, [countAttendant]);

  const attendantCost = useMemo(() => {
    return attendant.cost * countAttendant;
  }, [attendant.cost, countAttendant]);

  const priceMonth = useMemo(() => {
    const priceMonths = plans
      .filter(plan => plan.id === selectedButton)
      .map(pl => pl.prices.monthly)
      .reduce((acc, atual) => {
        return acc + atual;
      }, 0);

    const totalPrice = priceMonths + attendantCost;

    return `R$ ${totalPrice}`;
  }, [plans, selectedButton, attendantCost]);

  const priceYear = useMemo(() => {
    const priceYears = plans
      .filter(plan => plan.id === selectedButton)
      .map(pl => pl.prices.yearly)
      .reduce((acc, atual) => {
        return acc + atual;
      }, 0);

    const totalPrice = priceYears + attendantCost;

    return `R$ ${totalPrice}`;
  }, [plans, selectedButton, attendantCost]);

  const planDescription = useMemo(() => {
    return plans.filter(plan => plan.id === selectedButton).map(pl => pl.name);
  }, [plans, selectedButton]);

  const handleContract = useCallback(() => {
    return toast('Compra efetuada com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  return (
    <>
      <Container>
        {loading ? (
          <FiLoader className="loading" size={80} color="#00a6ce" />
        ) : (
          <>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Header selected={selected} handleSelect={handleSelect} />
            <Main>
              {plans.map(plan => (
                <MainPlan>
                  <Title>
                    <img src={Vector} alt="Vector" />
                    <h2>{plan.name}</h2>
                  </Title>
                  <p>{plan.description}</p>
                  <p className="value-month">
                    {selected
                      ? `R$ ${plan.prices.monthly}`
                      : `R$ ${plan.prices.yearly}`}
                    /mês
                  </p>

                  <Button
                    onClick={() => handleSelectedButton(plan.id)}
                    select={selectedButton === plan.id}
                    disabled={selectedButton === plan.id}
                  >
                    <p>Selecionar</p>
                  </Button>
                  <ListPlans>
                    {plan.features.map(feature => (
                      <li key={feature}>
                        <img src={Check} alt="" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ListPlans>
                </MainPlan>
              ))}
            </Main>
            <AttendentsContainer>
              <div>
                <h2>Atendentes</h2>
                <span>+R${attendant.cost}/mês por atendente</span>
              </div>
              <CountAttendentsContainer>
                <button type="button" onClick={handleDecrement}>
                  <FiChevronLeft color="#00a6ce" size={24} />
                </button>
                <p>{countAttendant}</p>
                <button type="button" onClick={handleIncrement}>
                  <FiChevronRight color="#00a6ce" size={24} />
                </button>
              </CountAttendentsContainer>
            </AttendentsContainer>
            <Footer>
              <TotalContainer>
                {selected ? (
                  <h3>Total: {priceMonth}/mês</h3>
                ) : (
                  <h3>Total: {priceYear}/mês</h3>
                )}

                <p>
                  {selected
                    ? `Plano selecionado: ${planDescription} - Mensal`
                    : `Plano selecionado: ${planDescription} - Anual`}
                </p>
              </TotalContainer>
              <ButtonFooter onClick={handleContract}>
                <p>Contratar</p>
              </ButtonFooter>
            </Footer>
          </>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
