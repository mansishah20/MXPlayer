CREATE DATABASE IF NOT EXISTS mx_player;
USE mx_player;

CREATE TABLE IF NOT EXISTS category (
    categoryid INT NOT NULL AUTO_INCREMENT,
    category_name varchar(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (categoryid)
);

CREATE TABLE IF NOT EXISTS language (
    languageid INT NOT NULL AUTO_INCREMENT,
    language_name varchar(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (languageid)
);

CREATE TABLE IF NOT EXISTS video(
    videoid INT NOT NULL AUTO_INCREMENT,
    video_name VARCHAR(50),
    description TEXT,
    type ENUM('movie','episode','music'),
    rating TINYINT UNSIGNED CHECK (rating > 0 AND rating <= 10),
    reales_year YEAR,
    watch_count INT,
    thumbnail_path VARCHAR(255),
    video_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (videoid)
);

CREATE TABLE IF NOT EXISTS webshow (
    showid INT NOT NULL AUTO_INCREMENT,
    show_name VARCHAR(50),
    description TEXT,
    languageid INT,
    rating TINYINT UNSIGNED NOT NULL CHECK (rating > 0 AND rating <= 10),
    reales_year YEAR,
    no_of_episode INT,
    thumbnail_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (showid),
    CONSTRAINT fk_showid_languageid FOREIGN KEY (languageid) REFERENCES language (languageid)
);

CREATE TABLE IF NOT EXISTS show_category(
    show_category_id INT NOT NULL AUTO_INCREMENT,
    showid INT NOT NULL,
    categoryid INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (show_category_id),
    CONSTRAINT fk_show_category_id_showid FOREIGN KEY (showid) REFERENCES webshow (showid),
    CONSTRAINT fk_show_category_id_categoryid FOREIGN KEY (categoryid) REFERENCES category (categoryid)
);

CREATE TABLE IF NOT EXISTS season(
    seasonid INT NOT NULL AUTO_INCREMENT,
    season_name VARCHAR(50),
    season_no INT,
    showid INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (seasonid),
    CONSTRAINT fk_seasonid_showid FOREIGN KEY (showid) REFERENCES webshow (showid)
);

CREATE TABLE IF NOT EXISTS episode(
    episodeid INT NOT NULL AUTO_INCREMENT,
    seasonid INT NOT NULL,
    episode_no INT,
    videoid INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (episodeid),
    CONSTRAINT fk_episodeid_seasonid FOREIGN KEY (seasonid) REFERENCES season (seasonid),
    CONSTRAINT fk_episodeid_videoid FOREIGN KEY (videoid) REFERENCES video (videoid)
);

CREATE TABLE IF NOT EXISTS movie(
    movieid INT NOT NULL AUTO_INCREMENT,
    categoryid INT,
    languageid INT,
    videoid INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (movieid),
    CONSTRAINT fk_movieid_categoryid FOREIGN KEY (categoryid) REFERENCES category (categoryid),
    CONSTRAINT fk_movieid_languageid FOREIGN KEY (languageid) REFERENCES language (languageid),
    CONSTRAINT fk_movieid_videoid FOREIGN KEY (videoid) REFERENCES video (videoid)
);

CREATE TABLE IF NOT EXISTS user (
    userid INT NOT NULL AUTO_INCREMENT,
    user_name varchar(50),
    contact BIGINT NOT NULL,
    email varchar(50),
    password varchar(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (userid)
);

CREATE TABLE IF NOT EXISTS user_master (
    userid INT NOT NULL AUTO_INCREMENT,
    email varchar(50) UNIQUE,
    type ENUM('gold','free') DEFAULT 'free',
    last_login TIMESTAMP,
    last_otp TINYINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (userid)
);

CREATE TABLE IF NOT EXISTS user_activity(
    activityid INT NOT NULL AUTO_INCREMENT,
    userid INT NOT NULL,
    videoid INT NOT NULL,
    is_watched BOOLEAN DEFAULT 0,
    is_liked BOOLEAN DEFAULT 0,
    add_to_playlist BOOLEAN DEFAULT 0,
    PRIMARY KEY(activityid),
    CONSTRAINT fk_activityid_userid FOREIGN KEY (userid) REFERENCES user (userid),
    CONSTRAINT fk_activityid_videoid FOREIGN KEY (videoid) REFERENCES video (videoid)
);


CREATE TABLE IF NOT EXISTS artist(
    artistid INT NOT NULL AUTO_INCREMENT,
    artist_name VARCHAR(50),
    gender ENUM('male', 'female'),
    photo_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (artistid)
);

CREATE TABLE IF NOT EXISTS show_artist(
    show_artist_id INT NOT NULL AUTO_INCREMENT,
    showid INT NOT NULL,
    artistid INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (show_artist_id),
    CONSTRAINT fk_show_artist_id_showid FOREIGN KEY (showid) REFERENCES webshow (showid),
    CONSTRAINT fk_show_artist_id_artistid FOREIGN KEY (artistid) REFERENCES artist (artistid)
);

CREATE TABLE IF NOT EXISTS movie_artist(
    movie_artist_id INT NOT NULL AUTO_INCREMENT,
    movieid INT NOT NULL,
    artistid INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (movie_artist_id),
    CONSTRAINT fk_movie_artist_id_movieid FOREIGN KEY (movieid) REFERENCES movie (movieid),
    CONSTRAINT fk_movie_artist_id_artistid FOREIGN KEY (artistid) REFERENCES artist (artistid)
);
