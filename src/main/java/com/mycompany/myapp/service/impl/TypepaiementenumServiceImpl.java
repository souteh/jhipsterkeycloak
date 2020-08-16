package com.mycompany.myapp.service.impl;

import com.mycompany.myapp.service.TypepaiementenumService;
import com.mycompany.myapp.domain.Typepaiementenum;
import com.mycompany.myapp.repository.TypepaiementenumRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link Typepaiementenum}.
 */
@Service
@Transactional
public class TypepaiementenumServiceImpl implements TypepaiementenumService {

    private final Logger log = LoggerFactory.getLogger(TypepaiementenumServiceImpl.class);

    private final TypepaiementenumRepository typepaiementenumRepository;

    public TypepaiementenumServiceImpl(TypepaiementenumRepository typepaiementenumRepository) {
        this.typepaiementenumRepository = typepaiementenumRepository;
    }

    @Override
    public Typepaiementenum save(Typepaiementenum typepaiementenum) {
        log.debug("Request to save Typepaiementenum : {}", typepaiementenum);
        return typepaiementenumRepository.save(typepaiementenum);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Typepaiementenum> findAll(Pageable pageable) {
        log.debug("Request to get all Typepaiementenums");
        return typepaiementenumRepository.findAll(pageable);
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<Typepaiementenum> findOne(Long id) {
        log.debug("Request to get Typepaiementenum : {}", id);
        return typepaiementenumRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Typepaiementenum : {}", id);
        typepaiementenumRepository.deleteById(id);
    }
}
