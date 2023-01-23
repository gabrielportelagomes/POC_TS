--
-- PostgreSQL database dump
--

-- Dumped from database version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)

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
-- Name: movie_genres; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movie_genres (
    id integer NOT NULL,
    name text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.movie_genres OWNER TO postgres;

--
-- Name: movie_genres_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movie_genres_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.movie_genres_id_seq OWNER TO postgres;

--
-- Name: movie_genres_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movie_genres_id_seq OWNED BY public.movie_genres.id;


--
-- Name: movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    name text NOT NULL,
    streaming_service_id integer NOT NULL,
    genre_id integer NOT NULL,
    watched boolean DEFAULT false,
    date_watched text,
    rating integer,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.movies OWNER TO postgres;

--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.movies_id_seq OWNER TO postgres;

--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: streaming_services; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.streaming_services (
    id integer NOT NULL,
    name text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.streaming_services OWNER TO postgres;

--
-- Name: streaming_services_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.streaming_services_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.streaming_services_id_seq OWNER TO postgres;

--
-- Name: streaming_services_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.streaming_services_id_seq OWNED BY public.streaming_services.id;


--
-- Name: movie_genres id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_genres ALTER COLUMN id SET DEFAULT nextval('public.movie_genres_id_seq'::regclass);


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Name: streaming_services id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.streaming_services ALTER COLUMN id SET DEFAULT nextval('public.streaming_services_id_seq'::regclass);


--
-- Data for Name: movie_genres; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movie_genres (id, name, created_at) FROM stdin;
1	Drama	2023-01-23 16:34:23.703864
2	Comédia	2023-01-23 16:34:45.295342
3	Ficção científica	2023-01-23 16:34:56.247288
4	Terror	2023-01-23 16:35:07.535416
5	Musical	2023-01-23 16:35:14.862767
6	Ação	2023-01-23 16:35:30.342934
7	Documentário	2023-01-23 16:35:39.911093
\.


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movies (id, name, streaming_service_id, genre_id, watched, date_watched, rating, created_at) FROM stdin;
1	Mad Max: Estrada da FúriaI	2	6	f	\N	\N	2023-01-23 16:36:22.684233
\.


--
-- Data for Name: streaming_services; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.streaming_services (id, name, created_at) FROM stdin;
1	Netflix	2023-01-23 16:32:16.959948
2	HBO Max	2023-01-23 16:32:43.175785
3	Prime Video	2023-01-23 16:32:53.735609
4	Disney+	2023-01-23 16:33:09.199581
5	Star+	2023-01-23 16:33:14.64779
6	Paramount+	2023-01-23 16:33:22.319524
7	Globoplay	2023-01-23 16:33:37.847192
8	Apple TV+	2023-01-23 16:33:49.143331
\.


--
-- Name: movie_genres_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movie_genres_id_seq', 7, true);


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movies_id_seq', 1, true);


--
-- Name: streaming_services_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.streaming_services_id_seq', 8, true);


--
-- Name: movie_genres movie_genres_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_genres
    ADD CONSTRAINT movie_genres_name_key UNIQUE (name);


--
-- Name: movie_genres movie_genres_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_genres
    ADD CONSTRAINT movie_genres_pkey PRIMARY KEY (id);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: streaming_services streaming_services_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.streaming_services
    ADD CONSTRAINT streaming_services_name_key UNIQUE (name);


--
-- Name: streaming_services streaming_services_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.streaming_services
    ADD CONSTRAINT streaming_services_pkey PRIMARY KEY (id);


--
-- Name: movies fk_genre_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT fk_genre_id FOREIGN KEY (genre_id) REFERENCES public.movie_genres(id) ON DELETE CASCADE;


--
-- Name: movies fk_streaming_service_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT fk_streaming_service_id FOREIGN KEY (streaming_service_id) REFERENCES public.streaming_services(id) ON DELETE CASCADE;


--
-- Name: movies movies_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_fk0 FOREIGN KEY (streaming_service_id) REFERENCES public.streaming_services(id);


--
-- Name: movies movies_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_fk1 FOREIGN KEY (genre_id) REFERENCES public.movie_genres(id);


--
-- PostgreSQL database dump complete
--

