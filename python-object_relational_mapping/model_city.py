#!/usr/bin/python3
""" Write a Python file similar to model_state.py named model_city.py
that contains the class definition of a City. """

from sqlalchemy import Column, Integer, String, ForeignKey
from model_state import Base, State


class City(Base):
    """City class"""
    __tablename__ = 'cities'
    id = Column(Integer, primary_key=True, autoincrement=True, nullable=False)
    name = Column(String(128), nullable=False)
    state_id = Column(Integer, ForeignKey('states.id'),
                      autoincrement=True, nullable=False)