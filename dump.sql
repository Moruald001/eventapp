--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: enum_invitees_response; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_invitees_response AS ENUM (
    'yes',
    'no',
    'maybe'
);


ALTER TYPE public.enum_invitees_response OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.events (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    date timestamp with time zone NOT NULL,
    location character varying(255) NOT NULL
);


ALTER TABLE public.events OWNER TO postgres;

--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.events_id_seq OWNER TO postgres;

--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- Name: invitees; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.invitees (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    response public.enum_invitees_response,
    "eventId" integer
);


ALTER TABLE public.invitees OWNER TO postgres;

--
-- Name: invitees_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.invitees_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.invitees_id_seq OWNER TO postgres;

--
-- Name: invitees_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.invitees_id_seq OWNED BY public.invitees.id;


--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- Name: invitees id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invitees ALTER COLUMN id SET DEFAULT nextval('public.invitees_id_seq'::regclass);


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.events (id, title, description, date, location) FROM stdin;
1	Concert de Jazz	Un concert de rock pour f├¬ter l'├®t├®.	2025-06-15 20:00:00+00	Salle de concert de lome
2	Concert de Jazz	Un concert de rock pour f├¬ter l'harmattan.	2025-06-15 20:00:00+00	Salle de concert de lome
3	Concert de Jazz	Un concert de rock pour f├¬ter l'ete.	2025-06-15 20:00:00+00	Salle de concert de paris
4	course de saison		2025-06-15 20:00:00+00	Salle de concert de Paris
5	course		2026-06-15 20:00:00+00	circuit de France
6	course		2026-06-15 20:00:00+00	circuit de France
7	course		2026-06-15 20:00:00+00	circuit de France
8	course		2026-06-15 20:00:00+00	circuit de France
9	course a velo		2025-05-07 00:00:00+00	palais de lome
10	fdasfsd	fdsafdsfdscdcdds	2025-05-13 00:00:00+00	fadfadsf
11	sfdgfsfd	fsdfds	2025-05-14 00:00:00+00	dsfdsf
12	fsdf	fsdfda	2025-05-30 00:00:00+00	afdsfa
13	fdsafdads		2025-05-15 00:00:00+00	fdasfdsfsa
14	dsfsadf	dsafd	2025-05-01 00:00:00+00	dsfads
15	course f1		2025-05-30 00:00:00+00	circuit pole ricard
\.


--
-- Data for Name: invitees; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.invitees (id, name, email, response, "eventId") FROM stdin;
5	Ro	roe@example.com	maybe	1
6	Ro	roe@example.com	yes	1
7	ben	benito@gmail.com	no	7
1	John Doe	johndoe@example.com	maybe	1
3	Ro	roe@example.com	yes	1
8	ben	benito@gmail.com	no	8
2	John Doe	johndoe@example.com	yes	2
4	Ro	roe@example.com	yes	1
9	zaibre	zaibre@example.fr	maybe	9
25	dsdad	saddsd@asd.com	yes	7
27	dfsfdsaf	fdffds@gmail.com	yes	1
28	fdsfdsf	adfas@gmial.com	no	6
29	benito le duc	benito@example.com	maybe	15
\.


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.events_id_seq', 15, true);


--
-- Name: invitees_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.invitees_id_seq', 29, true);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- Name: invitees invitees_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invitees
    ADD CONSTRAINT invitees_pkey PRIMARY KEY (id);


--
-- Name: invitees invitees_eventId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invitees
    ADD CONSTRAINT "invitees_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES public.events(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

