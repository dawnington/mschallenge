--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: subscriptions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE subscriptions (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    amount money NOT NULL,
    date date NOT NULL
);


--
-- Name: subscriptions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE subscriptions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: subscriptions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE subscriptions_id_seq OWNED BY subscriptions.id;


--
-- Name: subscriptions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY subscriptions ALTER COLUMN id SET DEFAULT nextval('subscriptions_id_seq'::regclass);


--
-- Data for Name: subscriptions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY subscriptions (id, name, amount, date) FROM stdin;
1	Osinski-Howell	$0.01	2016-09-22
2	Cronin, Cummings and Wisoky	$0.84	2016-09-24
3	Koepp-Rohan	$0.07	2016-09-26
4	Balistreri-Quitzon	$1.43	2016-09-28
5	Marquardt-Feest	$2.24	2016-09-30
6	Quigley-West	$2.73	2016-10-01
7	Friesen, Hettinger and Hintz	$1.08	2016-10-06
8	O'Connell, Herzog and Stoltenberg	$4.06	2016-10-11
9	Beatty and Sons	$4.12	2016-10-14
10	Franecki, Padberg and Marks	$3.57	2016-10-15
11	Hoeger, Schinner and Crooks	$8.26	2016-10-16
12	Legros-Rice	$3.95	2016-10-17
13	O'Conner-Marks	$10.06	2016-10-23
14	Mosciski, Dicki and Kassulke	$1.78	2016-10-26
15	Schmidt, Kassulke and Kiehn	$10.99	2016-10-28
16	Sawayn, Lemke and Watsica	$12.59	2016-10-30
17	Rosenbaum Inc	$5.97	2016-10-31
18	Leuschke-Kilback	$3.01	2016-11-05
19	Bailey LLC	$16.91	2016-11-07
20	Schmeler-McDermott	$16.23	2016-11-08
21	Pollich, Smitham and Quitzon	$8.93	2016-11-09
22	Vandervort-Reinger	$7.92	2016-11-10
23	Bartoletti, Schoen and Ortiz	$17.01	2016-11-13
24	Schaefer, Rippin and Gibson	$18.58	2016-11-15
25	Johnston Group	$1.87	2016-11-16
26	Lueilwitz-Hickle	$0.41	2016-11-17
27	Casper LLC	$18.18	2016-11-19
28	Huel, White and Maggio	$2.50	2016-11-23
29	Upton-Kerluke	$2.36	2016-11-25
30	Bahringer-DuBuque	$12.77	2016-11-27
31	Morissette and Sons	$23.80	2016-11-28
32	Treutel and Sons	$28.75	2016-11-30
33	Nienow, Kris and Kertzmann	$1.31	2016-12-02
34	Crooks, Moen and Mayer	$15.68	2016-12-03
35	Mertz Inc	$2.40	2016-12-07
36	Crist, McLaughlin and Veum	$8.04	2016-12-08
37	Hand-Hagenes	$29.27	2016-12-09
38	Schiller-Kris	$13.20	2016-12-10
39	Christiansen Group	$22.47	2016-12-11
40	Koelpin, Rau and Jones	$20.87	2016-12-16
41	Simonis and Sons	$2.63	2016-12-21
42	Rice-Murphy	$2.90	2016-12-24
43	Klocko Group	$1.08	2016-12-25
44	Nikolaus, Bosco and MacGyver	$42.13	2016-12-27
45	Schoen, Hayes and Trantow	$37.01	2017-01-02
46	Orn, McClure and Wilderman	$41.97	2017-01-03
47	Pollich, Kirlin and Frami	$23.04	2017-01-05
48	Ernser Group	$45.96	2017-01-06
49	Wisoky Inc	$33.39	2017-01-07
50	Haag, Beier and Langworth	$45.51	2017-01-08
51	Willms-Berge	$29.64	2017-01-09
52	Moore LLC	$3.14	2017-01-13
53	Kutch Group	$31.21	2017-01-14
54	Cronin LLC	$25.14	2017-01-20
55	Gaylord LLC	$41.05	2017-01-23
56	Gusikowski, Smitham and Sawayn	$8.94	2017-01-27
57	Hand Group	$46.07	2017-01-28
58	Conn-Wunsch	$22.90	2017-01-29
59	Koepp-White	$18.96	2017-02-01
60	O'Connell-Price	$21.88	2017-02-02
61	Eichmann, Parker and Williamson	$15.65	2017-02-03
62	Hilpert, Osinski and Koepp	$13.68	2017-02-04
63	Harber-Quigley	$28.49	2017-02-08
64	Reynolds, Braun and Osinski	$16.62	2017-02-11
65	Kulas, Kassulke and Turcotte	$5.73	2017-02-13
66	O'Hara-Gulgowski	$9.88	2017-02-14
67	Tillman Inc	$45.39	2017-02-15
68	Grady and Sons	$33.73	2017-02-17
69	Zulauf-Feeney	$24.83	2017-02-19
70	Ferry and Sons	$30.03	2017-02-20
71	Berge Group	$49.72	2017-02-22
72	Hermiston Group	$7.32	2017-02-23
73	Armstrong Group	$69.27	2017-02-24
74	Heaney LLC	$53.32	2017-03-02
75	Hickle, Funk and Windler	$2.12	2017-03-03
76	Wyman LLC	$1.71	2017-03-05
77	Wintheiser, Beer and Hackett	$28.72	2017-03-08
78	Leffler, Tillman and Murphy	$11.03	2017-03-09
79	Heidenreich-Hessel	$31.80	2017-03-12
80	Hermiston-Homenick	$55.15	2017-03-13
81	Dickinson Group	$44.20	2017-03-15
82	Borer, Mertz and Brown	$57.39	2017-03-18
83	Turcotte, Deckow and Hagenes	$6.88	2017-03-19
84	McGlynn, Marquardt and Marks	$73.72	2017-03-20
85	Heidenreich LLC	$68.60	2017-03-22
86	Marks, Powlowski and Lesch	$52.52	2017-03-23
87	Simonis Group	$82.39	2017-03-24
88	Dicki-Gerhold	$23.50	2017-03-25
89	Hessel-Kris	$15.90	2017-03-27
90	Schimmel-Glover	$49.78	2017-03-28
91	Rice, Abbott and Eichmann	$4.99	2017-03-29
92	Marks LLC	$86.51	2017-03-30
93	Altenwerth and Sons	$35.15	2017-03-31
94	Rice, Nader and Roob	$91.83	2017-04-01
95	Ebert-Stanton	$11.38	2017-04-02
96	Runolfsdottir, Hagenes and Gibson	$20.55	2017-04-03
97	Beier, Schmidt and Hackett	$24.01	2017-04-05
98	Lowe, Casper and King	$74.21	2017-04-06
99	Veum-Schowalter	$70.20	2017-04-08
100	Connelly-Reichel	$98.37	2017-04-09
\.


--
-- Name: subscriptions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('subscriptions_id_seq', 100, true);


--
-- Name: subscriptions subscriptions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY subscriptions
    ADD CONSTRAINT subscriptions_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

