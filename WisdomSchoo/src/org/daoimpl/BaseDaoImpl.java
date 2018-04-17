package org.daoimpl;

import org.dao.BaseDaoInter;
import org.springframework.orm.hibernate5.support.HibernateDaoSupport;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;

public class BaseDaoImpl<T> extends HibernateDaoSupport implements
        BaseDaoInter<T> {

	@SuppressWarnings({ "rawtypes" })
	public Class getEntityClass() {
		Type type = this.getClass().getGenericSuperclass();
		ParameterizedType pt = (ParameterizedType) type;
		return (Class) pt.getActualTypeArguments()[0];
	}

	@Override
	public void save(T entity) {
		// TODO Auto-generated method stub

		this.getHibernateTemplate().save(entity);
	}

	@SuppressWarnings("unchecked")
	public List<T> querryAll() {
		// TODO Auto-generated method stub
		return (List<T>) this.getHibernateTemplate().find(
				"from " + this.getEntityClass().getName());
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<T> findList(Class<T> clazz, String where) {
		// TODO Auto-generated method stub
		String Hql = "select en from " + clazz.getSimpleName() + " en";
		if (null != where) {
			Hql = Hql + " where " + where;
			System.out.println(Hql);
		}
		return (List<T>) getHibernateTemplate().find(Hql);
	}

	@Override
	public T get(Class<T> clazz, Serializable id) {
		// TODO Auto-generated method stub
		return getHibernateTemplate().get(clazz, id);
	}

	@Override
	public void delete(T entity) {
		// TODO Auto-generated method stub
		this.getHibernateTemplate().delete(entity);
	}

	@Override
	public void update(T entity) {
		// TODO Auto-generated method stub
		this.getHibernateTemplate().saveOrUpdate(entity);
	}
}
