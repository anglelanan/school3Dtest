package org.dao;

import java.io.Serializable;
import java.util.List;

public interface BaseDaoInter<T> {
    void save(T entity);

    List<T> querryAll();

    List<T> findList(Class<T> clazz, String where);

    T get(Class<T> clazz, Serializable id);

    void delete(T entity);

    public void update(T entity);
}
