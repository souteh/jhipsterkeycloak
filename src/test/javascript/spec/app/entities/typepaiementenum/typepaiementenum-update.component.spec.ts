import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { JhipsterkeycloakTestModule } from '../../../test.module';
import { TypepaiementenumUpdateComponent } from 'app/entities/typepaiementenum/typepaiementenum-update.component';
import { TypepaiementenumService } from 'app/entities/typepaiementenum/typepaiementenum.service';
import { Typepaiementenum } from 'app/shared/model/typepaiementenum.model';

describe('Component Tests', () => {
  describe('Typepaiementenum Management Update Component', () => {
    let comp: TypepaiementenumUpdateComponent;
    let fixture: ComponentFixture<TypepaiementenumUpdateComponent>;
    let service: TypepaiementenumService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhipsterkeycloakTestModule],
        declarations: [TypepaiementenumUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(TypepaiementenumUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TypepaiementenumUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TypepaiementenumService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Typepaiementenum(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new Typepaiementenum();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});