--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: admin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admin (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.admin OWNER TO postgres;

--
-- Name: admin_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admin_id_seq OWNER TO postgres;

--
-- Name: admin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admin_id_seq OWNED BY public.admin.id;


--
-- Name: courier; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courier (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.courier OWNER TO postgres;

--
-- Name: courier_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.courier_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.courier_id_seq OWNER TO postgres;

--
-- Name: courier_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.courier_id_seq OWNED BY public.courier.id;


--
-- Name: order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."order" (
    id integer NOT NULL,
    "pickUpLocation" character varying(255) NOT NULL,
    "dropOffLocation" character varying(255) NOT NULL,
    "packageDetails" character varying(255) NOT NULL,
    "deliveryTime" timestamp with time zone NOT NULL,
    "createdBy" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "orderStatus" character varying(255),
    "courierInfo" integer
);


ALTER TABLE public."order" OWNER TO postgres;

--
-- Name: order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_id_seq OWNER TO postgres;

--
-- Name: order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_id_seq OWNED BY public."order".id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    name character varying(255),
    email character varying(255),
    phone character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: admin id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin ALTER COLUMN id SET DEFAULT nextval('public.admin_id_seq'::regclass);


--
-- Name: courier id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courier ALTER COLUMN id SET DEFAULT nextval('public.courier_id_seq'::regclass);


--
-- Name: order id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order" ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20241025174950-create-user.js
20241105153628-create-order.js
20241107111530-create-admin.js
20241108120003-create-courier.js
\.


--
-- Data for Name: admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admin (id, name, email, password, "createdAt", "updatedAt") FROM stdin;
2	admin	admin@gmail.com	$2b$10$nHi3a/U/rpjdmN.sGFSMouNKZcEb0dshmEoo98rU.6lSCb2ijXOWu	2024-11-07 13:52:06.933+02	2024-11-07 13:52:06.933+02
3	admin	admin2@gmail.com	$2b$10$cxjzG7An7Q.vGJsmO4kZou0OCqjnlGNu1m3UiB8Jx/3kIqpnH/5iO	2024-11-09 22:07:32.884+02	2024-11-09 22:07:32.884+02
4	Admin Video	adminTest@gmail.com	$2b$10$4UuoqF6oxFcBOwMtiZl0puTmyvp4qQLF.vrYmFGiosQojkqHzWxAu	2024-11-12 13:16:57.118+02	2024-11-12 13:16:57.118+02
\.


--
-- Data for Name: courier; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courier (id, name, email, password, phone, "createdAt", "updatedAt") FROM stdin;
1	Courier 1	courier@gmail.com	123456	012345678900	2024-11-08 14:07:25.891+02	2024-11-08 14:07:25.891+02
2	Courier 1	courier1@gmail.com	$2b$10$/UwZLRusvSc00BvSkjHqRO2rJpo7LrJdNgFnTvIZ1Y.4bj9YL/FTm	012345678900	2024-11-08 22:42:10.875+02	2024-11-08 22:42:10.875+02
3	Courier Amazon	courierTest@gmail.com	$2b$10$mDxEDtkZVgWF3BBZ2c/56eD/iR9j09nw0xgpjZgEOZV4YH4bet7A2	012345678900	2024-11-12 13:19:07.372+02	2024-11-12 13:19:07.372+02
4	courier30	courier30@gmail.com	$2b$10$IAuZ9tc7./rCgw60SBET5u8v6ttAnLPjbe4Iw7u6mlbP6pt.jNIcm	123456789000	2024-11-27 09:00:40.852+02	2024-11-27 09:00:40.852+02
\.


--
-- Data for Name: order; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."order" (id, "pickUpLocation", "dropOffLocation", "packageDetails", "deliveryTime", "createdBy", "createdAt", "updatedAt", "orderStatus", "courierInfo") FROM stdin;
26	Cairo	Alex	Iphone 15	2024-11-05 02:00:00+02	9	2024-11-09 17:46:42.233+02	2024-11-09 17:46:42.233+02	Pending	\N
27	test	test	terstsssssssssssss	2024-11-28 02:00:00+02	9	2024-11-09 22:42:34.713+02	2024-11-09 22:42:34.713+02	Pending	\N
29	Alex	Giza	Headset	2024-11-28 02:00:00+02	13	2024-11-12 13:16:05.706+02	2024-11-12 13:16:25.9+02	Cancelled	\N
28	Cairo	Giza	Iphone 16	2024-11-15 02:00:00+02	13	2024-11-12 13:15:46.761+02	2024-11-12 13:21:20.978+02	Delivered	3
30	Cairo	Giza	iphone	2024-11-28 02:00:00+02	14	2024-11-27 08:59:00.52+02	2024-11-27 12:59:14.29+02	Delivered	4
25	final	tes	FINAL TEST 2	2024-11-28 02:00:00+02	9	2024-11-09 16:26:12.545+02	2024-11-09 16:29:19.14+02	Delivered	2
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, name, email, phone, password, "createdAt", "updatedAt") FROM stdin;
2	karim	test@gmail.com	012	012	2024-10-26 19:55:50.356+03	2024-10-26 19:55:50.356+03
3	seif	test2@gmail.com	012	012	2024-10-26 21:56:38.309+03	2024-10-26 21:56:38.309+03
4	karim 	karim@gmail.coml	012	012	2024-10-26 22:04:00.063+03	2024-10-26 22:04:00.063+03
5	Seif Tamer	karimyasser@gmail.com	012345678900	123456	2024-10-26 23:06:31.028+03	2024-10-26 23:06:31.028+03
6	karim	karim1@gmail.com	012345678900	123456	2024-11-05 16:06:01.302+02	2024-11-05 16:06:01.302+02
7	karim	karim11@gmail.com	012345678900	$2b$10$zqM5oeaPWc18ETU6Ox4WQev7HXHP1ENltU9QNVNu41DKsmguCFpzW	2024-11-05 16:06:44.14+02	2024-11-05 16:06:44.14+02
8	karim	karim12@gmail.com	012345678900	$2b$10$lfLxyz0YImb65KF3cnnAcOJjCMfOLkGuFa/DNyPqTfKhMcnV/NTQq	2024-11-05 16:11:28.413+02	2024-11-05 16:11:28.413+02
9	karim	karim@gmail.com	012345678900	$2b$10$sJyCLqUcqBU9vxmE/C73PuZqO6wnq/4VBSmFckux9O.1HrfWN/bTK	2024-11-05 16:13:57.246+02	2024-11-05 16:13:57.246+02
10	karim	karim111@gmail.com	012345678900	$2b$10$RuaTGa2ARKH5x5ugfNApce2bNK1XuDPBHMlr3addG2d5ZquA83ls.	2024-11-05 18:35:23.59+02	2024-11-05 18:35:23.59+02
11	karim	karim1111@gmail.com	012345678900	$2b$10$l3ovC8My36iLt103FhZpXuWPEvRyAaToFBt7.l3UWD8CiWRPVLG72	2024-11-05 18:41:54.987+02	2024-11-05 18:41:54.987+02
12	karim	karim11111@gmail.com	012345678900	$2b$10$Gma.SVoxgeSEUbz1WBnnhOvX5s.D7v.6qkmizQCFm7eeNDQDh6yxS	2024-11-09 17:36:21.96+02	2024-11-09 17:36:21.96+02
13	Karim Yasser	karimTest@gmail.com	012345678900	$2b$10$nagv/0lsUcq5GAZedMYYhe4ruoiupx8iieIfIb6flnkK/.BEFEDw2	2024-11-12 13:14:48.337+02	2024-11-12 13:14:48.337+02
14	basma	basma@gmail.com	012345678900	$2b$10$GR.97zOVNcsnGtgKBX1mQuST0czkMvdCAI8UVdZsUKvwgULZ/dKbq	2024-11-27 08:58:33.597+02	2024-11-27 08:58:33.597+02
\.


--
-- Name: admin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admin_id_seq', 4, true);


--
-- Name: courier_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courier_id_seq', 4, true);


--
-- Name: order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_id_seq', 30, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 14, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: admin admin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (id);


--
-- Name: courier courier_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courier
    ADD CONSTRAINT courier_pkey PRIMARY KEY (id);


--
-- Name: order order_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

